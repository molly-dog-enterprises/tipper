class AddFields < ActiveRecord::Migration
  def change
    add_column :events, :longname, :string
    add_column :teams, :image, :binary

    create_table :articles do |t|
      t.references :item, index: true
      t.string :item_type
      t.text :copy
      t.string :source
      t.string :link
      t.date :date
    end
  end
end
