module Shared
  module ReadOnly

    def readonly?
      true
    end

    def delete
      raise ReadOnlyRecord
    end

  end
end
