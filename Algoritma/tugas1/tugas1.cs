using System;
using System.Collections.Generic;
using System.Linq;
class Tugas {
	public static void clear() {
		Console.Clear();
	}
	public static void wait() {
		Console.Write("\n(PRESS FOR CONTINUE)");
		Console.ReadKey();
		clear();
	}
	public static string asc(List<int> lists) {
		List<int> temp = new List<int>(lists);
		bool loop = true;
		while (loop) {
			for (int i = 0; i < temp.Count(); i++)
			{
				if (i == (temp.Count() - 1)) {
					loop = false;
				} else if (temp[i] > temp[i+1]) {
					temp [i] = temp[i] ^ temp[i+1];
					temp [i+1] = temp[i] ^ temp[i+1];
					temp [i] = temp[i] ^ temp[i+1];
					break;
				}
			}
		}
		return list_format(temp);
	}
	public static string desc(List<int> lists) {
		List<int> temp = new List<int>(lists);
		bool loop = true;
		while (loop) {
			for (int i = 0; i < temp.Count(); i++)
			{
				if (i == (temp.Count() - 1)) {
					loop = false;
				} else if (temp[i] < temp[i+1]) {
					temp [i] = temp[i] ^ temp[i+1];
					temp [i+1] = temp[i] ^ temp[i+1];
					temp [i] = temp[i] ^ temp[i+1];
					break;
				}
			}
		}
		return list_format(temp);
	}
	public static int Rata(List<int> lists) {
		return lists.Sum() / lists.Count();
	}
	public static void print_lists(List<int> lists) {
		for (int i = 0; i < lists.Count(); i++) {
			Console.WriteLine($"{i+1}. '{lists[i]}'");
		}
	}
	public static void Tambah(List<int> lists) {
		int temp;
		while (true) {
			Console.Write("Tambah angka ke lists: ");
			temp = Convert.ToInt32(Console.ReadLine());
			if (temp != 0) {
				lists.Add(temp);
				break;
			} else {
				Console.WriteLine("\nInput tidak Valid!");
			}
			wait();
		}
	}
	public static void Hapus(List<int> lists)
	{
		clear();
		int opsiHapus;
		while (true)
		{
			print_lists(lists);
			Console.Write("Pilih salah satu: ");
			opsiHapus = Convert.ToInt32(Console.ReadLine());
			if (opsiHapus > 0 && opsiHapus <= lists.Count())
			{
				lists.Remove(lists[opsiHapus-1]);
				Console.WriteLine("Berhasil!");
				break;
			}
			else
			{
				Console.WriteLine("\nTidak Valid!");
			}
			wait();
		}
	}
	public static void Ubah(List<int> lists)
	{
		clear();
		int opsiUbah;
		while (true)
		{
			print_lists(lists);
			Console.Write("Pilih salah satu: ");
			opsiUbah = Convert.ToInt32(Console.ReadLine());
			if (opsiUbah > 0 && opsiUbah <= lists.Count())
			{
				Console.Write("Ubah dengan apa?: ");
				lists[opsiUbah - 1] = Convert.ToInt32(Console.ReadLine());
				Console.WriteLine("Berhasil!");
				break;
			}
			else
			{
				Console.WriteLine("\nTidak Valid!");
			}
			wait();
		}
	}
	public static void Main() {
		clear();
		List<int> Main_Lists = new List<int> {2, 4, 3, 5, 1};
		int opsi;
		while (true) {
			Console.WriteLine("~~~ Array Manipulation ~~~\nBy Shou Driz\n\n1. Tampilkan Data Awal\n2. Tampilkan Hasil Ascending Sorting\n3. Tampilkan Hasil Descending Sorting\n4. Rata-Rata\n5. Tampilkan Minimal\n6. Tampilkan Maximum\n7. Ubah Data\n8. Tambahkan Data\n9. Hapus Data\n10. EXIT");
			Console.Write("Opsi: ");
			opsi = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine();
			switch (opsi)
			{
				case 1:
					Console.WriteLine(list_format(Main_Lists));
					break;
				case 2:
					Console.WriteLine(asc(Main_Lists));
					break;
				case 3:
					Console.WriteLine(desc(Main_Lists));
					break;
				case 4:
					Console.WriteLine(Rata(Main_Lists));
					break;
				case 5:
					Console.WriteLine(Main_Lists.Min());
					break;
				case 6:
					Console.WriteLine(Main_Lists.Max());
					break;
				case 7:
					Ubah(Main_Lists);
					break;
				case 8:
					Tambah(Main_Lists);
					break;
				case 9:
					Hapus(Main_Lists);
					break;
				case 10:
					Environment.Exit(0);
					break;
				default:
					Console.WriteLine("Input Tidak Valid!");
					break;
			}
			wait();
		}
	}
	public static string list_format(List<int> lists) {
		string re = "[";
		for (int i = 0; i < lists.Count(); i++)
		{
			re += Convert.ToString(lists[i]);
			if (i == (lists.Count() - 1)) {
				break;
			}
			re += ',';
			re += ' ';
		}
		return re + ']';
	}
}
