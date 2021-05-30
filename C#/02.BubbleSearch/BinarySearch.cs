using System;

namespace _02.BubbleSearch
{
    public class BinarySearch
    {
        public static void Main(string[] args)
        {
            int[] array = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27.28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43 };
            Console.WriteLine(BinarySearch(array, 20));
        }

        static int Binary_Search(int[] array, int item)
        {
            var start = 0;
            var end = array.Length;
            var middle;
            var found = false;
            var positon = -1;
            while (found == false && start <= end)
            {
                count++;
                middle = Math.Floor((start + end) / 2);
                if (array[middle] == item)
                {
                    found = true;
                    positon = middle;
                    return positon;
                }
                if (item < array[middle])
                {
                    end = middle - 1;
                }
                else
                {
                    start = middle + 1;
                }
            }
            return positon;
        }
    }
}
