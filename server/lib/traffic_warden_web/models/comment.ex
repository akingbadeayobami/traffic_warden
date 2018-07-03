defmodule TrafficWardenWeb.Comment do
  use TrafficWardenWeb, :model
  alias TrafficWardenWeb.{Post, User}


  schema "comments" do
    field :message, :string

    belongs_to :post, Post
    belongs_to :user, User

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, [:user_id, :post_id, :title])
    |> validate_required([:user_id, :post_id, :title])
  end
end
