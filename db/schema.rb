# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150208230028) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "event_teams", force: :cascade do |t|
    t.integer  "team_id"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "event_teams", ["event_id"], name: "index_event_teams_on_event_id", using: :btree
  add_index "event_teams", ["team_id"], name: "index_event_teams_on_team_id", using: :btree

  create_table "event_users", force: :cascade do |t|
    t.integer  "event_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "event_users", ["event_id"], name: "index_event_users_on_event_id", using: :btree
  add_index "event_users", ["user_id"], name: "index_event_users_on_user_id", using: :btree

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.string   "event_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guesses", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "match_id"
    t.integer  "team_id"
    t.integer  "by"
    t.integer  "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "guesses", ["match_id"], name: "index_guesses_on_match_id", using: :btree
  add_index "guesses", ["team_id"], name: "index_guesses_on_team_id", using: :btree
  add_index "guesses", ["user_id"], name: "index_guesses_on_user_id", using: :btree

  create_table "matches", force: :cascade do |t|
    t.integer  "event_id"
    t.string   "location"
    t.datetime "start_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "matches", ["event_id"], name: "index_matches_on_event_id", using: :btree

  create_table "sides", force: :cascade do |t|
    t.integer  "event_team_id"
    t.integer  "match_id"
    t.integer  "score"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "sides", ["event_team_id"], name: "index_sides_on_event_team_id", using: :btree
  add_index "sides", ["match_id"], name: "index_sides_on_match_id", using: :btree

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "event_teams", "events"
  add_foreign_key "event_teams", "teams"
  add_foreign_key "event_users", "events"
  add_foreign_key "event_users", "users"
  add_foreign_key "guesses", "matches"
  add_foreign_key "guesses", "teams"
  add_foreign_key "guesses", "users"
  add_foreign_key "matches", "events"
  add_foreign_key "sides", "event_teams"
  add_foreign_key "sides", "matches"
end
