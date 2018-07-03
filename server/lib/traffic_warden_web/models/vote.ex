defmodule TrafficWardenWeb.Vote do
  use TrafficWardenWeb, :model
  alias TrafficWardenWeb.{Post, User}


  schema "votes" do
    field :vote, :boolean

    belongs_to :post, Post
    belongs_to :user, User

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, [:post_id, :user_id, :vote])
    |> validate_required([:post_id, :user_id, :vote])
  end
end
