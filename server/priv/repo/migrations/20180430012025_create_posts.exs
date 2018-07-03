defmodule TrafficWardenWeb.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :message, :text
      add :location, :string
      add :level, :integer
      add :net_vote, :integer, null: false, default: 0
      add :user_id, references(
        :users, on_delete: :restrict, on_update: :update_all
      ), null: false

      timestamps()
    end

    create index(:posts, [:user_id])
  end
end
