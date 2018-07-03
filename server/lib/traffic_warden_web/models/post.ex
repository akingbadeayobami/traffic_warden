defmodule TrafficWardenWeb.Post do
  use TrafficWardenWeb, :model
  alias TrafficWardenWeb.{Comment, User, Vote}


  schema "posts" do
    field :message, :string
    field :location, :string
    field :level, :integer
    field :net_vote, :integer

    belongs_to :user, User
    has_many :comments, Comment
    has_many :votes, Vote

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, [:message, :location, :user_id, :level, :net_vote])
    |> validate_required([:message, :location, :user_id, :level, :net_vote])
  end
end
