class Array
  def quicksort
    return [] if empty?

    pivot=delete_at(size/2)
    left,right=partition(&pivot.method(:>))

    return *left.quicksort,pivot,*right.quicksort
  end
end

arr=[3,2,5,1,7,5,9,0,2,11,3,1]
p arr.quicksort
