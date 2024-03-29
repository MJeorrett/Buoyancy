namespace BuoyancyApi.E2eTests.Shared.Dtos.Projects;

internal record UpdateProjectDto
{
    public int Id { get; init; }

    public string Name { get; init; } = "";
}
