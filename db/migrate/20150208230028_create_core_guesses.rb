class CreateCoreGuesses < ActiveRecord::Migration
  def change
    create_table :guesses do |t|
      t.references :user, index: true
      t.references :match, index: true
      t.references :team, index: true
      t.integer :by
      t.integer :score

      t.timestamps null: false
    end
    add_foreign_key :guesses, :users
    add_foreign_key :guesses, :matches
    add_foreign_key :guesses, :teams
  end
end
