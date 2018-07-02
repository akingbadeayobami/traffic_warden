# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :traffic_warden,
  ecto_repos: [TrafficWarden.Repo]

# Configures the endpoint
config :traffic_warden, TrafficWardenWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "J78k+cCXSPyfGEhuEWZcO9r+wNnUUE7mYAxHfZ1MqdpUuFpVPEepzK2J0mTN/qw/",
  render_errors: [view: TrafficWardenWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: TrafficWarden.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
