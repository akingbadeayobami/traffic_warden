defmodule TrafficWardenWeb.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :display_name, :string

      timestamps()
    end
  end
end
