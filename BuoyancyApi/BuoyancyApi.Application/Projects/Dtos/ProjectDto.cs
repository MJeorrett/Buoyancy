using BuoyancyApi.Core.Entities;

namespace BuoyancyApi.Application.Projects.Dtos;

public record ProjectDto
{
    public int Id { get; init; }

    public string Name { get; init; } = "";

    public static ProjectDto MapFromEntity(ProjectEntity entity)
    {
        return new()
        {
            Id = entity.Id,
            Name = entity.Name,
        };
    }
}
