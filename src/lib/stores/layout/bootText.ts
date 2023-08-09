export const bootText = [
	'kernel: Linux version 5.15.0-72-generic (buildd@lcy02-amd64-074) (gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0, GNU ld (GNU Binutils for Ubuntu) 2.34) #79~20.04.1-Ubuntu SMP Thu Apr 20 22:12:07 UTC 2023 (Ubuntu 5.15.0-72.79~20.04.1-generic 5.15.98)',
	'kernel: Command line: BOOT_IMAGE=/boot/vmlinuz-5.15.0-72-generic root=UUID=cecef076-4c60-40ff-a861-1beae82e30bc ro nouveau.blacklist=1 acpi_backlight=vendor "acpi_osi=!Windows 2013" "acpi_osi=!Windows 2012" pcie_aspm=off',
	'kernel: KERNEL supported cpus:',
	'kernel:   Intel GenuineIntel',
	'kernel:   AMD AuthenticAMD',
	'kernel:   Hygon HygonGenuine',
	'kernel:   Centaur CentaurHauls',
	'kernel:   zhaoxin   Shanghai  ',
	"kernel: x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
	"kernel: x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'",
	"kernel: x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'",
	'kernel: x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256',
	"kernel: x86/fpu: Enabled xstate features 0x7, context size is 832 bytes, using 'compacted' format.",
	'kernel: signal: max sigframe size: 1776',
	'kernel: BIOS-provided physical RAM map:',
	'kernel: BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable',
	'kernel: BIOS-e820: [mem 0x00000000000a0000-0x00000000000fffff] reserved',
	'kernel: BIOS-e820: [mem 0x0000000000100000-0x0000000009ecffff] usable',
	'kernel: BIOS-e820: [mem 0x0000000009ed0000-0x0000000009ffffff] reserved',
	'kernel: BIOS-e820: [mem 0x000000000a000000-0x000000000a1fffff] usable',
	'kernel: BIOS-e820: [mem 0x000000000a200000-0x000000000a20ffff] ACPI NVS',
	'kernel: BIOS-e820: [mem 0x000000000a210000-0x00000000c7258fff] usable',
	'kernel: BIOS-e820: [mem 0x00000000c7259000-0x00000000c7386fff] reserved',
	'kernel: BIOS-e820: [mem 0x00000000c7387000-0x00000000c73effff] ACPI data',
	'kernel: BIOS-e820: [mem 0x00000000c73f0000-0x00000000c76d9fff] ACPI NVS',
	'kernel: BIOS-e820: [mem 0x00000000c76da000-0x00000000ccffdfff] reserved',
	'kernel: BIOS-e820: [mem 0x00000000ccffe000-0x00000000cdffffff] usable',
	'kernel: BIOS-e820: [mem 0x00000000ce000000-0x00000000cfffffff] reserved',
	'kernel: BIOS-e820: [mem 0x00000000f0000000-0x00000000f7ffffff] reserved',
	'kernel: BIOS-e820: [mem 0x00000000fd000000-0x00000000ffffffff] reserved',
	'kernel: BIOS-e820: [mem 0x0000000100000000-0x000000040f33ffff] usable',
	'kernel: BIOS-e820: [mem 0x000000040f340000-0x00000004501fffff] reserved',
	'kernel: NX (Execute Disable) protection: active',
	'kernel: e820: update [mem 0xc3e8a018-0xc3e97457] usable ==> usable',
	'kernel: e820: update [mem 0xc3e8a018-0xc3e97457] usable ==> usable',
	'kernel: extended physical RAM map:',
	'kernel: reserve setup_data: [mem 0x0000000000000000-0x000000000009ffff] usable',
	'kernel: reserve setup_data: [mem 0x00000000000a0000-0x00000000000fffff] reserved',
	'kernel: reserve setup_data: [mem 0x0000000000100000-0x0000000009ecffff] usable',
	'kernel: reserve setup_data: [mem 0x0000000009ed0000-0x0000000009ffffff] reserved',
	'kernel: reserve setup_data: [mem 0x000000000a000000-0x000000000a1fffff] usable',
	'kernel: reserve setup_data: [mem 0x000000000a200000-0x000000000a20ffff] ACPI NVS',
	'kernel: reserve setup_data: [mem 0x000000000a210000-0x00000000c3e8a017] usable',
	'kernel: reserve setup_data: [mem 0x00000000c3e8a018-0x00000000c3e97457] usable',
	'kernel: reserve setup_data: [mem 0x00000000c3e97458-0x00000000c7258fff] usable',
	'kernel: reserve setup_data: [mem 0x00000000c7259000-0x00000000c7386fff] reserved',
	'kernel: reserve setup_data: [mem 0x00000000c7387000-0x00000000c73effff] ACPI data',
	'kernel: reserve setup_data: [mem 0x00000000c73f0000-0x00000000c76d9fff] ACPI NVS',
	'kernel: reserve setup_data: [mem 0x00000000c76da000-0x00000000ccffdfff] reserved',
	'kernel: reserve setup_data: [mem 0x00000000ccffe000-0x00000000cdffffff] usable',
	'kernel: reserve setup_data: [mem 0x00000000ce000000-0x00000000cfffffff] reserved',
	'kernel: reserve setup_data: [mem 0x00000000f0000000-0x00000000f7ffffff] reserved',
	'kernel: reserve setup_data: [mem 0x00000000fd000000-0x00000000ffffffff] reserved',
	'kernel: reserve setup_data: [mem 0x0000000100000000-0x000000040f33ffff] usable',
	'kernel: reserve setup_data: [mem 0x000000040f340000-0x00000004501fffff] reserved',
	'kernel: efi: EFI v2.70 by American Megatrends',
	'kernel: efi: ACPI=0xc73ef000 ACPI 2.0=0xc73ef014 TPMFinalLog=0xc7692000 SMBIOS=0xcce1b000 SMBIOS 3.0=0xcce1a000 MEMATTR=0xc5d14518 ESRT=0xc6be7c18 MOKvar=0xcce96000 RNG=0xc739b018 TPMEventLog=0xc3e98018 ',
	'kernel: random: crng init done',
	'kernel: secureboot: Secure boot disabled',
	'kernel: SMBIOS 3.2.0 present.',
	'DMI: HP HP Laptop 14s-fq0xxx/87B8, BIOS F.62 05/09/2022',
	'tsc: Fast TSC calibration using PIT',
	'tsc: Detected 1996.295 MHz processor',
	'e820: update [mem 0x00000000-0x00000fff] usable ==> reserved',
	'e820: remove [mem 0x000a0000-0x000fffff] usable',
	'last_pfn = 0x40f340 max_arch_pfn = 0x400000000',
	'x86/PAT: Configuration [0-7]: WB  WC  UC- UC  WB  WP  UC- WT  ',
	'e820: update [mem 0xd0000000-0xffffffff] usable ==> reserved',
	'last_pfn = 0xce000 max_arch_pfn = 0x400000000',
	'esrt: Reserving ESRT space from 0x00000000c6be7c18 to 0x00000000c6be7c50.',
	'e820: update [mem 0xc6be7000-0xc6be7fff] usable ==> reserved',
	'Using GB pages for direct mapping',
	'secureboot: Secure boot disabled',
	'RAMDISK: [mem 0xbed2d000-0xc37f1fff]',
	'ACPI: Early table checksum verification disabled',
	'ACPI: RSDP 0x00000000C73EF014 000024 (v02 HPQOEM)',
	'ACPI: XSDT 0x00000000C73EE728 000104 (v01 HPQOEM SLIC-MPC 01072009 AMI  01000013)',
	'ACPI: FACP 0x00000000C73E3000 000114 (v06 HPQOEM SLIC-MPC 01072009 HP   00010013)',
	'ACPI: DSDT 0x00000000C73CE000 01495A (v02 HPQOEM 87B8     01072009 ACPI 20120913)',
	'ACPI: FACS 0x00000000C7690000 000040',
	'ACPI: MSDM 0x00000000C73ED000 000055 (v03 HPQOEM SLIC-MPC 00000001 HP   00010013)',
	'ACPI: SSDT 0x00000000C73E5000 007216 (v02 HPQOEM 87B8     00000002 ACPI 04000000)',
	'ACPI: IVRS 0x00000000C73E4000 0001A4 (v02 HPQOEM 87B8     00000001 HP   00000000)',
	'ACPI: FIDT 0x00000000C73CD000 00009C (v01 HPQOEM 87B8     01072009 HP   00010013)',
	'ACPI: MCFG 0x00000000C73CC000 00003C (v01 HPQOEM 87B8     01072009 HP   00010013)',
	'ACPI: HPET 0x00000000C73CB000 000038 (v01 HPQOEM 87B8     01072009 HP   00000005)',
	'ACPI: SSDT 0x00000000C73CA000 000228 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: VFCT 0x00000000C73BC000 00D484 (v01 HPQOEM 87B8     00000001 HP   31504F47)',
	'ACPI: SSDT 0x00000000C73BB000 000050 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: TPM2 0x00000000C73BA000 00004C (v04 HPQOEM 87B8     00000001 HP   00000000)',
	'ACPI: SSDT 0x00000000C73B8000 001BF4 (v01 HPQOEM 87B8     00000001 ACPI 00000001)',
	'ACPI: CRAT 0x00000000C73B7000 000F28 (v01 HPQOEM 87B8     00000001 HP   00000001)',
	'ACPI: CDIT 0x00000000C73B6000 000029 (v01 HPQOEM 87B8     00000001 HP   00000001)',
	'ACPI: SSDT 0x00000000C73B5000 000139 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73B4000 0000C2 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73B3000 000D37 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73B1000 0010A5 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73AD000 0030C8 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: WSMT 0x00000000C73AC000 000028 (v01 HPQOEM 87B8     01072009 HP   00010013)',
	'ACPI: APIC 0x00000000C73AB000 0000DE (v03 HPQOEM 87B8     01072009 HP   00010013)',
	'ACPI: SSDT 0x00000000C73AA000 00007D (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73A9000 000517 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73A8000 00020A (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73A7000 0006F8 (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: SSDT 0x00000000C73A6000 0002BF (v01 HPQOEM 87B8     00000001 ACPI 20120913)',
	'ACPI: FPDT 0x00000000C73A5000 000044 (v01 HPQOEM 87B8     01072009 HP   01000013)',
	'ACPI: BGRT 0x00000000C73A4000 000038 (v01 HPQOEM 87B8     01072009 HP   00010013)',
	'ACPI: Reserving FACP table memory at [mem 0xc73e3000-0xc73e3113]',
	'ACPI: Reserving DSDT table memory at [mem 0xc73ce000-0xc73e2959]',
	'ACPI: Reserving FACS table memory at [mem 0xc7690000-0xc769003f]',
	'ACPI: Reserving MSDM table memory at [mem 0xc73ed000-0xc73ed054]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73e5000-0xc73ec215]',
	'ACPI: Reserving IVRS table memory at [mem 0xc73e4000-0xc73e41a3]',
	'ACPI: Reserving FIDT table memory at [mem 0xc73cd000-0xc73cd09b]',
	'ACPI: Reserving MCFG table memory at [mem 0xc73cc000-0xc73cc03b]',
	'ACPI: Reserving HPET table memory at [mem 0xc73cb000-0xc73cb037]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73ca000-0xc73ca227]',
	'ACPI: Reserving VFCT table memory at [mem 0xc73bc000-0xc73c9483]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73bb000-0xc73bb04f]',
	'ACPI: Reserving TPM2 table memory at [mem 0xc73ba000-0xc73ba04b]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73b8000-0xc73b9bf3]',
	'ACPI: Reserving CRAT table memory at [mem 0xc73b7000-0xc73b7f27]',
	'ACPI: Reserving CDIT table memory at [mem 0xc73b6000-0xc73b6028]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73b5000-0xc73b5138]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73b4000-0xc73b40c1]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73b3000-0xc73b3d36]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73b1000-0xc73b20a4]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73ad000-0xc73b00c7]',
	'ACPI: Reserving WSMT table memory at [mem 0xc73ac000-0xc73ac027]',
	'ACPI: Reserving APIC table memory at [mem 0xc73ab000-0xc73ab0dd]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73aa000-0xc73aa07c]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73a9000-0xc73a9516]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73a8000-0xc73a8209]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73a7000-0xc73a76f7]',
	'ACPI: Reserving SSDT table memory at [mem 0xc73a6000-0xc73a62be]',
	'ACPI: Reserving FPDT table memory at [mem 0xc73a5000-0xc73a5043]',
	'ACPI: Reserving BGRT table memory at [mem 0xc73a4000-0xc73a4037]',
	'No NUMA configuration found',
	'Faking a node at [mem 0x0000000000000000-0x000000040f33ffff]',
	'NODE_DATA(0) allocated [mem 0x40f316000-0x40f33ffff]',
	'Zone ranges:',
	'  DMA      [mem 0x0000000000001000-0x0000000000ffffff]',
	'  DMA32    [mem 0x0000000001000000-0x00000000ffffffff]',
	'  Normal   [mem 0x0000000100000000-0x000000040f33ffff]',
	'  Device   empty',
	'Movable zone start for each node',
	'Early memory node ranges',
	'  node   0: [mem 0x0000000000001000-0x000000000009ffff]',
	'  node   0: [mem 0x0000000000100000-0x0000000009ecffff]',
	'  node   0: [mem 0x000000000a000000-0x000000000a1fffff]',
	'  node   0: [mem 0x000000000a210000-0x00000000c7258fff]',
	'  node   0: [mem 0x00000000ccffe000-0x00000000cdffffff]',
	'  node   0: [mem 0x0000000100000000-0x000000040f33ffff]'
];