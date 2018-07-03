defmodule TrafficWardenWeb.Repo.Migrations.CreateVotes do
  use Ecto.Migration

  def change do
    create table(:votes) do
      add :post_id, references(
        :posts, on_delete: :restrict, on_update: :update_all
      ), null: false
      add :user_id, references(
        :users, on_delete: :restrict, on_update: :update_all
      ), null: false
      add :vote, :boolean

      timestamps()
    end

    create index(:votes, [:post_id])
    create index(:votes, [:user_id])
  end
end
