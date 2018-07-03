defmodule TrafficWardenWeb.User do
  use TrafficWardenWeb, :model
  alias TrafficWardenWeb.{Comment, Post, Vote}

  schema "users" do
    field :display_name, :string

    has_many :comments, Comment
    has_many :posts, Post
    has_many :votes, Vote

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:display_name])
    |> validate_required([:display_name])
  end
end
