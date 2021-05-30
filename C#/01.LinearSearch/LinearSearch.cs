using System;

namespace _01.LinearSearch
{
    public class LinearSearch
    {
        public static void Main(string[] args)
        {
            int[] array = new int[] { 1, 4, 5, 8, 9, 44, 56, 32, 11, 2, 3, 0, 88, 44, 33, 1, 6, 56, 13, 23, 55 };

            Console.WriteLine(Linear_Search(array,44));
        }

        static public int? Linear_Search(int[] array, int item)
        {
            int count = 0;

            for (int i = 0; i < array.Length; i++)
            {
                count++;
                if(array[i] == item){
                    return i;
                }
            }
            return null;
        }
    }
}
