EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Device:L L1
U 1 1 603497F2
P 7150 3750
F 0 "L1" V 7340 3750 50  0000 C CNN
F 1 "100u" V 7249 3750 50  0000 C CNN
F 2 "Inductor_THT:L_Toroid_Vertical_L16.5mm_W11.4mm_P7.62mm_Pulse_KM-2" H 7150 3750 50  0001 C CNN
F 3 "~" H 7150 3750 50  0001 C CNN
	1    7150 3750
	0    -1   -1   0   
$EndComp
Wire Wire Line
	6700 3750 7000 3750
Wire Wire Line
	7300 3750 7400 3750
Wire Wire Line
	7400 3750 7400 3900
$Comp
L Device:CP C12
U 1 1 6034BF2E
P 8050 4000
F 0 "C12" H 8168 4046 50  0000 L CNN
F 1 "1000u" H 8168 3955 50  0000 L CNN
F 2 "Capacitor_THT:CP_Radial_D10.0mm_P5.00mm" H 8088 3850 50  0001 C CNN
F 3 "~" H 8050 4000 50  0001 C CNN
	1    8050 4000
	1    0    0    -1  
$EndComp
Wire Wire Line
	7400 3750 8050 3750
Wire Wire Line
	8050 3750 8050 3850
Connection ~ 7400 3750
Wire Wire Line
	8050 4150 8050 4200
Wire Wire Line
	6200 3950 6200 4200
Wire Wire Line
	5700 3750 5700 4200
Wire Wire Line
	5700 4200 6200 4200
Connection ~ 6200 4200
$Comp
L Device:CP C11
U 1 1 6034CCC4
P 5050 4000
F 0 "C11" H 5168 4046 50  0000 L CNN
F 1 "100u" H 5168 3955 50  0000 L CNN
F 2 "Capacitor_THT:CP_Radial_D10.0mm_P5.00mm" H 5088 3850 50  0001 C CNN
F 3 "~" H 5050 4000 50  0001 C CNN
	1    5050 4000
	1    0    0    -1  
$EndComp
Wire Wire Line
	5050 3850 5050 3550
Wire Wire Line
	5050 3550 5700 3550
Wire Wire Line
	5050 4150 5050 4200
Wire Wire Line
	5050 4200 5700 4200
Connection ~ 5700 4200
$Comp
L Device:C C13
U 1 1 6034DC92
P 8500 4000
F 0 "C13" H 8615 4046 50  0000 L CNN
F 1 "100n" H 8615 3955 50  0000 L CNN
F 2 "Capacitor_SMD:C_1206_3216Metric_Pad1.33x1.80mm_HandSolder" H 8538 3850 50  0001 C CNN
F 3 "~" H 8500 4000 50  0001 C CNN
	1    8500 4000
	1    0    0    -1  
$EndComp
Connection ~ 8050 4200
Connection ~ 8050 3750
Wire Wire Line
	8500 4200 8500 4150
Wire Wire Line
	8050 4200 8500 4200
Wire Wire Line
	8500 3750 8500 3850
Wire Wire Line
	8050 3750 8500 3750
Wire Wire Line
	7400 3750 7400 3550
Wire Wire Line
	7400 3550 6700 3550
$Comp
L power:GND #PWR0101
U 1 1 60351993
P 6200 4200
F 0 "#PWR0101" H 6200 3950 50  0001 C CNN
F 1 "GND" H 6205 4027 50  0000 C CNN
F 2 "" H 6200 4200 50  0001 C CNN
F 3 "" H 6200 4200 50  0001 C CNN
	1    6200 4200
	1    0    0    -1  
$EndComp
$Comp
L Connector:Conn_01x02_Male J4
U 1 1 60356A6E
P 1100 1550
F 0 "J4" H 1208 1731 50  0000 C CNN
F 1 "Conn_01x02_Male" H 1208 1640 50  0000 C CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 1100 1550 50  0001 C CNN
F 3 "~" H 1100 1550 50  0001 C CNN
	1    1100 1550
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0102
U 1 1 60357CD8
P 1850 1650
F 0 "#PWR0102" H 1850 1400 50  0001 C CNN
F 1 "GND" H 1855 1477 50  0000 C CNN
F 2 "" H 1850 1650 50  0001 C CNN
F 3 "" H 1850 1650 50  0001 C CNN
	1    1850 1650
	1    0    0    -1  
$EndComp
Wire Wire Line
	1500 1750 1500 1650
Wire Wire Line
	1500 1650 1300 1650
$Comp
L power:PWR_FLAG #FLG0101
U 1 1 60358EC5
P 1500 1750
F 0 "#FLG0101" H 1500 1825 50  0001 C CNN
F 1 "PWR_FLAG" V 1500 1878 50  0000 L CNN
F 2 "" H 1500 1750 50  0001 C CNN
F 3 "~" H 1500 1750 50  0001 C CNN
	1    1500 1750
	-1   0    0    1   
$EndComp
Connection ~ 1500 1650
Text Label 1550 1550 0    50   ~ 0
Vbat
Wire Wire Line
	1550 1550 1500 1550
$Comp
L power:PWR_FLAG #FLG0102
U 1 1 6035B55A
P 1500 1300
F 0 "#FLG0102" H 1500 1375 50  0001 C CNN
F 1 "PWR_FLAG" H 1500 1473 50  0000 C CNN
F 2 "" H 1500 1300 50  0001 C CNN
F 3 "~" H 1500 1300 50  0001 C CNN
	1    1500 1300
	1    0    0    -1  
$EndComp
Wire Wire Line
	1500 1300 1500 1550
Connection ~ 1500 1550
Wire Wire Line
	1500 1550 1300 1550
Wire Wire Line
	1850 1650 1500 1650
$Comp
L Connector:Conn_01x02_Male J51
U 1 1 60360AF0
P 7900 1700
F 0 "J51" H 7872 1582 50  0000 R CNN
F 1 "Conn_01x02_Male" H 7872 1673 50  0000 R CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 7900 1700 50  0001 C CNN
F 3 "~" H 7900 1700 50  0001 C CNN
	1    7900 1700
	-1   0    0    1   
$EndComp
$Comp
L Connector:Conn_01x02_Male J52
U 1 1 603617F5
P 7900 2150
F 0 "J52" H 7872 2032 50  0000 R CNN
F 1 "Conn_01x02_Male" H 7872 2123 50  0000 R CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 7900 2150 50  0001 C CNN
F 3 "~" H 7900 2150 50  0001 C CNN
	1    7900 2150
	-1   0    0    1   
$EndComp
Wire Wire Line
	7350 1600 7550 1600
Connection ~ 7550 1600
Wire Wire Line
	7550 1600 7700 1600
$Comp
L power:GND #PWR0103
U 1 1 603635AF
P 7700 1700
F 0 "#PWR0103" H 7700 1450 50  0001 C CNN
F 1 "GND" H 7705 1527 50  0000 C CNN
F 2 "" H 7700 1700 50  0001 C CNN
F 3 "" H 7700 1700 50  0001 C CNN
	1    7700 1700
	1    0    0    -1  
$EndComp
Wire Wire Line
	7550 2050 7700 2050
Wire Wire Line
	7550 1600 7550 2050
$Comp
L power:GND #PWR0104
U 1 1 60364B21
P 7700 2150
F 0 "#PWR0104" H 7700 1900 50  0001 C CNN
F 1 "GND" H 7705 1977 50  0000 C CNN
F 2 "" H 7700 2150 50  0001 C CNN
F 3 "" H 7700 2150 50  0001 C CNN
	1    7700 2150
	1    0    0    -1  
$EndComp
Text Notes 7250 1300 0    50   ~ 0
Moteurs\n
$Comp
L Device:Fuse F1
U 1 1 60379B73
P 4150 3550
F 0 "F1" V 3953 3550 50  0000 C CNN
F 1 "5A" V 4044 3550 50  0000 C CNN
F 2 "fuse:fusible_alim" V 4080 3550 50  0001 C CNN
F 3 "~" H 4150 3550 50  0001 C CNN
	1    4150 3550
	0    1    1    0   
$EndComp
Connection ~ 5050 3550
Text Label 3700 3550 0    50   ~ 0
Vbat
Wire Wire Line
	3700 3550 4000 3550
Wire Wire Line
	4300 3550 5050 3550
Connection ~ 5050 5000
$Comp
L power:GND #PWR0105
U 1 1 60355DEE
P 6200 5650
F 0 "#PWR0105" H 6200 5400 50  0001 C CNN
F 1 "GND" H 6205 5477 50  0000 C CNN
F 2 "" H 6200 5650 50  0001 C CNN
F 3 "" H 6200 5650 50  0001 C CNN
	1    6200 5650
	1    0    0    -1  
$EndComp
Wire Wire Line
	7400 5000 6700 5000
Wire Wire Line
	7400 5200 7400 5000
Wire Wire Line
	8050 5200 8500 5200
Wire Wire Line
	8500 5200 8500 5300
Wire Wire Line
	8050 5650 8500 5650
Wire Wire Line
	8500 5650 8500 5600
Connection ~ 8050 5200
Connection ~ 8050 5650
$Comp
L Device:C C23
U 1 1 60355DE0
P 8500 5450
F 0 "C23" H 8615 5496 50  0000 L CNN
F 1 "100n" H 8615 5405 50  0000 L CNN
F 2 "Capacitor_SMD:C_1206_3216Metric_Pad1.33x1.80mm_HandSolder" H 8538 5300 50  0001 C CNN
F 3 "~" H 8500 5450 50  0001 C CNN
	1    8500 5450
	1    0    0    -1  
$EndComp
Connection ~ 5700 5650
Wire Wire Line
	5050 5650 5700 5650
Wire Wire Line
	5050 5600 5050 5650
Wire Wire Line
	5050 5000 5700 5000
Wire Wire Line
	5050 5300 5050 5000
$Comp
L Device:CP C21
U 1 1 60355DD5
P 5050 5450
F 0 "C21" H 5168 5496 50  0000 L CNN
F 1 "100u" H 5168 5405 50  0000 L CNN
F 2 "Capacitor_THT:CP_Radial_D10.0mm_P5.00mm" H 5088 5300 50  0001 C CNN
F 3 "~" H 5050 5450 50  0001 C CNN
	1    5050 5450
	1    0    0    -1  
$EndComp
Connection ~ 6200 5650
Wire Wire Line
	5700 5650 6200 5650
Wire Wire Line
	5700 5200 5700 5650
Connection ~ 7400 5650
Wire Wire Line
	6200 5650 7400 5650
Wire Wire Line
	6200 5400 6200 5650
Wire Wire Line
	8050 5650 7400 5650
Wire Wire Line
	8050 5600 8050 5650
Connection ~ 7400 5200
Wire Wire Line
	8050 5200 8050 5300
Wire Wire Line
	7400 5200 8050 5200
$Comp
L Device:CP C22
U 1 1 60355DC4
P 8050 5450
F 0 "C22" H 8168 5496 50  0000 L CNN
F 1 "1000u" H 8168 5405 50  0000 L CNN
F 2 "Capacitor_THT:CP_Radial_D10.0mm_P5.00mm" H 8088 5300 50  0001 C CNN
F 3 "~" H 8050 5450 50  0001 C CNN
	1    8050 5450
	1    0    0    -1  
$EndComp
Wire Wire Line
	7400 5200 7400 5350
Wire Wire Line
	7300 5200 7400 5200
$Comp
L Device:D_Schottky D2
U 1 1 60355DBC
P 7400 5500
F 0 "D2" V 7354 5580 50  0000 L CNN
F 1 "D_Schottky" V 7445 5580 50  0000 L CNN
F 2 "Diode_THT:D_DO-27_P12.70mm_Horizontal" H 7400 5500 50  0001 C CNN
F 3 "~" H 7400 5500 50  0001 C CNN
	1    7400 5500
	0    1    1    0   
$EndComp
Wire Wire Line
	6700 5200 7000 5200
$Comp
L Device:L L2
U 1 1 60355DB5
P 7150 5200
F 0 "L2" V 7340 5200 50  0000 C CNN
F 1 "100u" V 7249 5200 50  0000 C CNN
F 2 "Inductor_THT:L_Toroid_Vertical_L16.5mm_W11.4mm_P7.62mm_Pulse_KM-2" H 7150 5200 50  0001 C CNN
F 3 "~" H 7150 5200 50  0001 C CNN
	1    7150 5200
	0    -1   -1   0   
$EndComp
$Comp
L Relay:G5LE-1 K3
U 1 1 6038A04E
P 1700 4350
F 0 "K3" H 2130 4396 50  0000 L CNN
F 1 "G5LE-1" H 2130 4305 50  0000 L CNN
F 2 "Relay_THT:Relay_SPDT_Omron-G5LE-1" H 2150 4300 50  0001 L CNN
F 3 "http://www.omron.com/ecb/products/pdf/en-g5le.pdf" H 1700 4350 50  0001 C CNN
	1    1700 4350
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0106
U 1 1 6038AD75
P 1500 4750
F 0 "#PWR0106" H 1500 4500 50  0001 C CNN
F 1 "GND" H 1505 4577 50  0000 C CNN
F 2 "" H 1500 4750 50  0001 C CNN
F 3 "" H 1500 4750 50  0001 C CNN
	1    1500 4750
	1    0    0    -1  
$EndComp
Wire Wire Line
	1500 4750 1500 4700
$Comp
L Connector:Conn_01x02_Male J3
U 1 1 6038E526
P 1300 3750
F 0 "J3" H 1408 3931 50  0000 C CNN
F 1 "Conn_01x02_Male" H 1408 3840 50  0000 C CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 1300 3750 50  0001 C CNN
F 3 "~" H 1300 3750 50  0001 C CNN
	1    1300 3750
	1    0    0    -1  
$EndComp
Text Label 1500 3450 0    50   ~ 0
Vbat
Wire Wire Line
	1500 3450 1500 3750
Wire Wire Line
	1500 3850 1500 4000
Text Notes 800  3900 0    50   ~ 0
arret\nurgence\nNC
Text Notes 8050 3450 0    50   ~ 0
logique
Text Notes 8050 4850 0    50   ~ 0
puissance
$Comp
L Connector:Conn_01x02_Male J21
U 1 1 6039F97F
P 9100 4850
F 0 "J21" V 9162 4894 50  0000 L CNN
F 1 "Conn_01x02_Male" V 9253 4894 50  0000 L CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 9100 4850 50  0001 C CNN
F 3 "~" H 9100 4850 50  0001 C CNN
	1    9100 4850
	0    1    1    0   
$EndComp
Wire Wire Line
	9000 5200 8500 5200
Connection ~ 8500 5200
$Comp
L Device:D D3
U 1 1 603A6728
P 1000 4350
F 0 "D3" V 954 4430 50  0000 L CNN
F 1 "D" V 1045 4430 50  0000 L CNN
F 2 "Diode_THT:D_DO-27_P12.70mm_Horizontal" H 1000 4350 50  0001 C CNN
F 3 "~" H 1000 4350 50  0001 C CNN
	1    1000 4350
	0    1    1    0   
$EndComp
Wire Wire Line
	1000 4200 1000 4000
Wire Wire Line
	1000 4000 1500 4000
Connection ~ 1500 4000
Wire Wire Line
	1500 4000 1500 4050
Wire Wire Line
	1000 4500 1000 4700
Wire Wire Line
	1000 4700 1500 4700
Connection ~ 1500 4700
Wire Wire Line
	1500 4700 1500 4650
Text Label 1900 4950 0    50   ~ 0
Vbat
Wire Wire Line
	1900 4950 1900 4650
Text Label 2000 3950 0    50   ~ 0
Vpow
$Comp
L Device:Fuse F2
U 1 1 603AF4E5
P 4150 5000
F 0 "F2" V 3953 5000 50  0000 C CNN
F 1 "5A" V 4044 5000 50  0000 C CNN
F 2 "fuse:fusible_alim" V 4080 5000 50  0001 C CNN
F 3 "~" H 4150 5000 50  0001 C CNN
	1    4150 5000
	0    1    1    0   
$EndComp
Wire Wire Line
	4300 5000 5050 5000
Text Label 3750 5000 0    50   ~ 0
Vpow
Wire Wire Line
	3750 5000 4000 5000
$Comp
L Connector:Conn_01x02_Male J22
U 1 1 603CE060
P 10000 4850
F 0 "J22" V 10062 4894 50  0000 L CNN
F 1 "Conn_01x02_Male" V 10153 4894 50  0000 L CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 10000 4850 50  0001 C CNN
F 3 "~" H 10000 4850 50  0001 C CNN
	1    10000 4850
	0    1    1    0   
$EndComp
Wire Wire Line
	9000 5050 9000 5200
Wire Wire Line
	9900 5050 9900 5200
Wire Wire Line
	9900 5200 9700 5200
Connection ~ 9000 5200
Wire Wire Line
	9100 5050 9100 5650
Wire Wire Line
	9100 5650 8500 5650
Connection ~ 8500 5650
Wire Wire Line
	10000 5050 10000 5650
Wire Wire Line
	10000 5650 9100 5650
Connection ~ 9100 5650
$Comp
L Connector:Conn_01x02_Male J11
U 1 1 603F36FA
P 9100 3400
F 0 "J11" V 9162 3444 50  0000 L CNN
F 1 "Conn_01x02_Male" V 9253 3444 50  0000 L CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 9100 3400 50  0001 C CNN
F 3 "~" H 9100 3400 50  0001 C CNN
	1    9100 3400
	0    1    1    0   
$EndComp
Wire Wire Line
	9000 3750 8500 3750
$Comp
L Connector:Conn_01x02_Male J12
U 1 1 603F3701
P 10000 3400
F 0 "J12" V 10062 3444 50  0000 L CNN
F 1 "Conn_01x02_Male" V 10153 3444 50  0000 L CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 10000 3400 50  0001 C CNN
F 3 "~" H 10000 3400 50  0001 C CNN
	1    10000 3400
	0    1    1    0   
$EndComp
Wire Wire Line
	9000 3600 9000 3750
Wire Wire Line
	9900 3600 9900 3750
Wire Wire Line
	9900 3750 9800 3750
Connection ~ 9000 3750
Wire Wire Line
	9100 3600 9100 4200
Wire Wire Line
	9100 4200 8500 4200
Wire Wire Line
	10000 3600 10000 4200
Wire Wire Line
	10000 4200 9100 4200
Connection ~ 9100 4200
$Comp
L Connector:Conn_01x02_Male J23
U 1 1 603F6A17
P 10650 5650
F 0 "J23" H 10622 5532 50  0000 R CNN
F 1 "Conn_01x02_Male" H 10622 5623 50  0000 R CNN
F 2 "Connector_Wire:SolderWire-0.127sqmm_1x02_P3.7mm_D0.48mm_OD1mm" H 10650 5650 50  0001 C CNN
F 3 "~" H 10650 5650 50  0001 C CNN
	1    10650 5650
	-1   0    0    1   
$EndComp
Wire Wire Line
	10450 5650 10000 5650
Wire Wire Line
	10100 4000 10100 4200
Wire Wire Line
	10100 4200 10000 4200
Connection ~ 10000 4200
Wire Wire Line
	10450 5550 9700 5550
Wire Wire Line
	9800 3900 9800 3750
Connection ~ 9800 3750
Wire Wire Line
	9800 3750 9000 3750
NoConn ~ 1800 4050
$Comp
L Device:Fuse F5
U 1 1 6035F0F3
P 7200 1600
F 0 "F5" V 7003 1600 50  0000 C CNN
F 1 "10A" V 7094 1600 50  0000 C CNN
F 2 "fuse:fusible_alim" V 7130 1600 50  0001 C CNN
F 3 "~" H 7200 1600 50  0001 C CNN
	1    7200 1600
	0    1    1    0   
$EndComp
Wire Wire Line
	7050 1600 6600 1600
Text Label 6600 1600 0    50   ~ 0
Vpow
$Comp
L power:PWR_FLAG #FLG0103
U 1 1 604172D7
P 5050 3550
F 0 "#FLG0103" H 5050 3625 50  0001 C CNN
F 1 "PWR_FLAG" H 5050 3723 50  0000 C CNN
F 2 "" H 5050 3550 50  0001 C CNN
F 3 "~" H 5050 3550 50  0001 C CNN
	1    5050 3550
	1    0    0    -1  
$EndComp
$Comp
L power:PWR_FLAG #FLG0104
U 1 1 60418853
P 5050 5000
F 0 "#FLG0104" H 5050 5075 50  0001 C CNN
F 1 "PWR_FLAG" H 5050 5173 50  0000 C CNN
F 2 "" H 5050 5000 50  0001 C CNN
F 3 "~" H 5050 5000 50  0001 C CNN
	1    5050 5000
	1    0    0    -1  
$EndComp
Wire Wire Line
	6200 4200 7400 4200
$Comp
L Device:D_Schottky D1
U 1 1 603540E4
P 7400 4050
F 0 "D1" V 7354 4130 50  0000 L CNN
F 1 "D_Schottky" V 7445 4130 50  0000 L CNN
F 2 "Diode_THT:D_DO-27_P12.70mm_Horizontal" H 7400 4050 50  0001 C CNN
F 3 "~" H 7400 4050 50  0001 C CNN
	1    7400 4050
	0    1    1    0   
$EndComp
Connection ~ 7400 4200
Wire Wire Line
	7400 4200 8050 4200
$Comp
L Regulator_Switching:LM2576T-5 U1
U 1 1 6038B683
P 6200 3650
F 0 "U1" H 6200 4017 50  0000 C CNN
F 1 "LM2576T-5" H 6200 3926 50  0000 C CNN
F 2 "Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerEven_Lead3.8mm_Vertical" H 6200 3400 50  0001 L CIN
F 3 "http://www.ti.com/lit/ds/symlink/lm2576.pdf" H 6200 3650 50  0001 C CNN
	1    6200 3650
	1    0    0    -1  
$EndComp
$Comp
L Regulator_Switching:LM2576T-5 U2
U 1 1 6038C106
P 6200 5100
F 0 "U2" H 6200 5467 50  0000 C CNN
F 1 "LM2576T-5" H 6200 5376 50  0000 C CNN
F 2 "Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerEven_Lead3.8mm_Vertical" H 6200 4850 50  0001 L CIN
F 3 "http://www.ti.com/lit/ds/symlink/lm2576.pdf" H 6200 5100 50  0001 C CNN
	1    6200 5100
	1    0    0    -1  
$EndComp
Connection ~ 10000 5650
Wire Wire Line
	9700 5550 9700 5200
Connection ~ 9700 5200
Wire Wire Line
	9700 5200 9000 5200
Wire Wire Line
	2000 3950 2000 4050
$Comp
L Device:LED D4
U 1 1 603904F4
P 2450 1600
F 0 "D4" V 2489 1482 50  0000 R CNN
F 1 "LED" V 2398 1482 50  0000 R CNN
F 2 "LED_THT:LED_D3.0mm" H 2450 1600 50  0001 C CNN
F 3 "~" H 2450 1600 50  0001 C CNN
	1    2450 1600
	0    -1   -1   0   
$EndComp
Text Label 2450 1100 0    50   ~ 0
Vbat
$Comp
L Device:R R4
U 1 1 60391A95
P 2450 1250
F 0 "R4" H 2520 1296 50  0000 L CNN
F 1 "R" H 2520 1205 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0411_L9.9mm_D3.6mm_P5.08mm_Vertical" V 2380 1250 50  0001 C CNN
F 3 "~" H 2450 1250 50  0001 C CNN
	1    2450 1250
	1    0    0    -1  
$EndComp
Wire Wire Line
	2450 1450 2450 1400
$Comp
L power:GND #PWR0107
U 1 1 60394F80
P 2450 1750
F 0 "#PWR0107" H 2450 1500 50  0001 C CNN
F 1 "GND" H 2455 1577 50  0000 C CNN
F 2 "" H 2450 1750 50  0001 C CNN
F 3 "" H 2450 1750 50  0001 C CNN
	1    2450 1750
	1    0    0    -1  
$EndComp
$EndSCHEMATC
