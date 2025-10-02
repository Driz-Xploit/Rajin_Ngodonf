from sys import exit
from os import system as cmd, name as your_os
clear = lambda: cmd("cls" if your_os == 'nt' else 'clear')
def wait():
    print("\n(PRESS FOR CONTINUE)", end='')
    input()
def kembalikan():
    if list(dict_dipinjam.keys()):
        for i, x in enumerate(list(dict_dipinjam.keys())):
            print(f"{i+1}. {x.capitalize()} -> {dict_dipinjam[x]} buku")
        tgl = int(input("Tanggal berapa di kembalikan?: "))
        if tgl >= hari_ini:
            if tgl > (hari_ini + 14):
                denda = (tgl - 14) * 1000
                print(f"Kamu tidak mengumpulkan buku selama {tgl - 14} hari!\n"+"Denda: Rp {:,}".format(denda))
            else:
                print("Arigatou, sudah mengumpulkan tepat waktu")
            for i in list(dict_dipinjam.keys()):
                dict_buku[i] += dict_dipinjam[i]
        else:
            print("Input Tidak Valid!")
    else:
        print("Tidak ada buku yang kamu pinjam")
def pinjam():
    buku_keys = list(dict_buku.keys())
    if not buku_keys:
        return print("Maaf, tidak ada buku tersedia. tolong isi di Tambah Buku...")
    lihat()
    buku_pinjam = int(input(f"\npilih salah satu: ")) - 1
    if buku_pinjam > len(buku_keys) or buku_pinjam < 0:
        return print(f"Maaf, tapi input tidak valid")
    stok_pinjam = int(input(f"Mau pinjam berapa untuk {buku_keys[buku_pinjam].capitalize()}?: "))
    if stok_pinjam > 0:
        if dict_buku[buku_keys[buku_pinjam]] >= stok_pinjam:
            dict_buku[buku_keys[buku_pinjam]] -= stok_pinjam
            dict_dipinjam[buku_keys[buku_pinjam]] = stok_pinjam
            print(f"Arigatou...\nKini stok buku '{buku_keys[buku_pinjam].capitalize()}' ada {dict_buku[buku_keys[buku_pinjam]]}")
        else:
            print(f"Maaf, tapi jumlah buku yang dipinjam lebih besar dari stok buku '{buku_keys[buku_pinjam].capitalize()}'\nBuku ini ada {dict_buku[buku_keys[buku_pinjam]]} buku")
    else:
        print("Maaf tapi input tidak valid")
def tambah():
    buku = input("Nama buku: ").lower()
    if buku in list(dict_buku.keys()):
        return print(f"Maaf, Buku '{buku.capitalize()}' sudah ada di daftar...\nAda {dict_buku[buku]} buku")
    stok = int(input("Stok: "))
    if stok > 0:
        dict_buku[buku.lower()] = stok
    else:
        print("Input stok tidak valid")
def lihat():
    if len(list(dict_buku.keys())):
        for i, x in enumerate(list(dict_buku.keys())):
            print(f"{i+1}. {x.capitalize()} -> {dict_buku[x]} buku")
    else:
        return print("Maaf, tidak ada buku tersedia. tolong isi di Tambah Buku...")
def menu():
    dict_menu = {"Tambah Buku": tambah, "Lihat Daftar Buku": lihat, "Pinjam Buku": pinjam, "Kembalikan buku": kembalikan, "Keluar": exit}
    keys_menu = list(dict_menu.keys())
    global dict_buku, dict_dipinjam, hari_ini
    hari_ini = 1
    dict_buku = {}
    dict_dipinjam = {}
    while True:
        try:
            print(f"\n~~~ Menu Perpustakaan ~~~\n@ Code By Shou Driz\nTanggal: {hari_ini}")
            for i, x in enumerate(keys_menu):
                print(f"{i+1}. {x}")
            opsi = int(input(f"Pilih salah satu (1-{len(keys_menu)}): "))
            if opsi > 0 and opsi <= len(keys_menu):
                dict_menu[keys_menu[opsi-1]]()
            else:
                print("Input tidak valid")
            wait()
            clear()
        except ValueError:
            print("Input tidak valid, harusnya angka")
            wait()
            clear()
        except KeyboardInterrupt:
            print("\nbye...")
            exit()
if __name__ == '__main__':
    clear()
    menu()
