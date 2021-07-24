class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name, limit: 100, null: false
      t.text :description
      t.string :word

      t.timestamps
    end
  end
end
