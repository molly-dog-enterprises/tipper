class AddSlugToEvent < ActiveRecord::Migration
  def up
    add_column :events, :slug, :string, null: false, default: 'null'

    Admin::Event.all.each do |event|
      event.slug = event.name.downcase.underscore.gsub(/\s+/, '_')
      event.save!
    end

    change_column_default(:events, :slug, nil)
  end

  def down
    remove_column :events, :slug
  end
end
