class CreateLeagues < ActiveRecord::Migration
  def change
    create_table :leagues do |t|
      t.string :name
      t.string :description
      t.string :password
      t.references :event

      t.timestamps null: false
    end
  end
end
