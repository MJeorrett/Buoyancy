using BuoyancyApi.E2eTests.Shared.Dtos.Projects;
using BuoyancyApi.E2eTests.Shared.Endpoints;
using BuoyancyApi.E2eTests.Shared.Extensions;
using BuoyancyApi.E2eTests.Shared.WebApplicationFactory;
using FluentAssertions;
using Xunit.Abstractions;

namespace BuoyancyApi.E2eTests.Projects;

[Collection(CustomWebApplicationCollection.Name)]
public class ProjectE2eTests : TestBase
{
    public ProjectE2eTests(
        CustomWebApplicationFixture webApplicationFixture,
        ITestOutputHelper testOutputHelper) :
        base(webApplicationFixture, testOutputHelper)
    {
    }

    [Fact]
    public async Task ShouldReturnCreatedProjectById()
    {
        var createResponse = await HttpClient.CreateProject().Call(new() { Name = "Expected name" });

        await createResponse.Should().HaveStatusCode(201);

        var createdProjectId = await createResponse.ReadResponseContentAs<int>();

        var getProjectByIdResponse = await HttpClient.GetProjectById().Call(createdProjectId);

        await getProjectByIdResponse.Should().HaveStatusCode(200);

        var returnedProject = await getProjectByIdResponse.ReadResponseContentAs<ProjectDto>();

        returnedProject.Name.Should().Be("Expected name");
    }

    [Fact]
    public async Task ShouldListCreatedProjects()
    {
        var project1Id = await HttpClient.CreateProject().CallAndParseResponse(new() { Name = "Name 1" });
        var project2Id = await HttpClient.CreateProject().CallAndParseResponse(new() { Name = "Name 2" });

        var listProjectsResults = await HttpClient.ListProjects().CallAndParseResponse(new()
        {
            PageIndex = 1,
            PageSize = 5,
        });

        listProjectsResults.Items.Should().HaveCount(2);
        listProjectsResults.Items[0].Should().BeEquivalentTo(new ProjectDto() { Id = project1Id, Name = "Name 1" });
        listProjectsResults.Items[1].Id.Should().Be(project2Id);
    }

    [Fact]
    public async Task ShouldUpdateProject()
    {
        var projectId = await HttpClient.CreateProject().CallAndParseResponse(new() { Name = "Name 1" });

        var updateResponse = await HttpClient.UpdateProject().Call(new() { Id = projectId, Name = "Updated name" });

        await updateResponse.Should().HaveStatusCode(200);

        var updatedProject = await HttpClient.GetProjectById().CallAndParseResponse(projectId);

        updatedProject.Should().BeEquivalentTo(new ProjectDto() { Id = projectId, Name = "Updated name" });
    }

    [Fact]
    public async Task ShouldDeleteProject()
    {
        var projectId1 = await HttpClient.CreateProject().CallAndParseResponse(new() { Name = "Name 1" });
        var projectId2 = await HttpClient.CreateProject().CallAndParseResponse(new() { Name = "Name 2" });

        var deleteProjectResponse = await HttpClient.DeleteProject().Call(projectId1);

        await deleteProjectResponse.Should().HaveStatusCode(200);

        var listProjectsResults = await HttpClient.ListProjects().CallAndParseResponse(new()
        {
            PageIndex = 1,
            PageSize = 5,
        });

        listProjectsResults.Items.Should().HaveCount(1);
        listProjectsResults.Items[0].Id.Should().Be(projectId2);
    }
}
