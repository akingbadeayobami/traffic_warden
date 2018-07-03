defmodule TrafficWardenWeb.Repo.Migrations.CreateComments do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :user_id, references(
        :users, on_delete: :restrict, on_update: :update_all
      ), null: false
      add :post_id, references(
        :posts, on_delete: :restrict, on_update: :update_all
      ), null: false
      add :message, :text

      timestamps()
    end
    create index(:comments, [:user_id])
    create index(:comments, [:post_id])
  end
end
