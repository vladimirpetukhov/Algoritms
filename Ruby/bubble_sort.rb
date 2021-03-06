def bubble_sort(array)
  n = array.length

  loop do
    swapped = false

    (n - 1).times do |i|
      if array[i] > array[i + 1]
        array[i], array[i + 1] = array[i + 1], array[i]
        swapped = true
      end
    end
    break if not swapped
  end
  array
end

a = [3, 2, 5, 1, 7, 5, 9, 0, 2, 11, 3, 1]
p bubble_sort(a)