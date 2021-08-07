import { gv } from './MockGlobals';

// Functions
const functions = {
  1749: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7287) == TRUE;
  },
  1748: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7286) == TRUE;
  },
  1747: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7285) == TRUE;
  },
  1746: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7284) == TRUE;
  },
  1272: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(62) <= 29;
  },
  1271: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(62) >= 1;
  },
  1270: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(62) >= 30;
  },
  1225: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(55) <= 12;
  },
  1204: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(55) >= 13;
  },
  1203: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(55) >= 1;
  },
  1217: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(56) <= 2;
  },
  1216: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(43) <= 9;
  },
  1215: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(56) >= 3;
  },
  1214: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(43) >= 10;
  },
  1198: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(43) >= 10 && gv.GetInt(56) >= 3;
  },
  1197: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(43) >= 1 || gv.GetInt(56) >= 1;
  },
  1223: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(51) <= 5;
  },
  1222: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(52) <= 19;
  },
  1221: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(50) <= 19;
  },
  1220: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(48) <= 19;
  },
  1196: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(48) >= 20 && gv.GetInt(50) >= 20) && gv.GetInt(52) >= 20) && gv.GetInt(51) >= 6;
  },
  1194: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(51) >= 6;
  },
  1193: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(52) >= 20;
  },
  1192: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(50) >= 20;
  },
  1191: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(48) >= 20;
  },
  1190: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(48) >= 1 || gv.GetInt(50) >= 1) || gv.GetInt(51) >= 1) || gv.GetInt(52) >= 1;
  },
  1219: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(54) <= 9;
  },
  1202: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(54) >= 10;
  },
  1201: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(54) >= 1;
  },
  1218: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(53) <= 6;
  },
  1200: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(53) >= 7;
  },
  1199: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(53) >= 1;
  },
  1111: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5070) == FALSE && gv.GetInt(46) >= 275;
  },
  1669: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4936) == TRUE || gv.GetBool(5070) == TRUE;
  },
  1110: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4936) == FALSE && gv.GetInt(47) >= 275;
  },
  1109: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4608) == TRUE && gv.GetBool(4609) == FALSE) && gv.GetBool(4610) == FALSE;
  },
  873: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4607) == FALSE;
  },
  872: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4610) == TRUE;
  },
  871: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4608) == TRUE && gv.GetBool(4609) == TRUE;
  },
  870: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4610) == FALSE && gv.GetBool(4608) == TRUE) && gv.GetBool(4609) == FALSE;
  },
  869: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4607) == TRUE && gv.GetBool(4608) == FALSE;
  },
  2009: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4857) == TRUE;
  },
  2008: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(7728) == TRUE && gv.GetBool(7729) == TRUE) && gv.GetBool(7730) == TRUE;
  },
  2007: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7730) == TRUE;
  },
  2006: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7729) == TRUE;
  },
  2005: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7728) == TRUE;
  },
  1577: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4846) == FALSE && gv.GetBool(5047) == TRUE) && gv.GetInt(105) != 10100;
  },
  1256: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5885) == FALSE && ((gv.GetBool(4851) == TRUE || gv.GetBool(4853) == TRUE) || gv.GetBool(4856) == TRUE);
  },
  1255: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5885) == TRUE && ((gv.GetBool(4851) == TRUE || gv.GetBool(4853) == TRUE) || gv.GetBool(4856) == TRUE);
  },
  1108: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5890) == FALSE && gv.GetInt(105) == 140301;
  },
  1251: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5069) == TRUE && gv.GetInt(2) == 2;
  },
  1107: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5066) == FALSE && gv.GetBool(5067) == FALSE) && gv.GetInt(105) == 130100;
  },
  1249: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5044) == TRUE && gv.GetBool(5046) == TRUE;
  },
  1248: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5036) == TRUE && gv.GetInt(2) == 1;
  },
  1106: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5036) == FALSE && gv.GetBool(7279) == FALSE) && gv.GetInt(105) == 190100;
  },
  1633: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4898) == FALSE && gv.GetBool(7002) == FALSE;
  },
  1105: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4898) == FALSE && gv.GetInt(105) == 180100;
  },
  997: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5001) == TRUE && gv.GetBool(4904) == TRUE;
  },
  996: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5001) == TRUE && gv.GetBool(4903) == TRUE;
  },
  992: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4935) == TRUE;
  },
  991: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4934) == TRUE;
  },
  986: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4901) == TRUE;
  },
  985: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4900) == TRUE;
  },
  984: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4904) == TRUE;
  },
  982: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4903) == TRUE;
  },
  1634: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4640) == FALSE && gv.GetBool(6998) == FALSE;
  },
  1104: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4640) == FALSE && gv.GetInt(105) == 170201;
  },
  864: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4606) == TRUE && gv.GetBool(5885) == TRUE;
  },
  863: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4606) == TRUE && gv.GetBool(5885) == FALSE;
  },
  862: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4605) == TRUE;
  },
  977: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4882) == TRUE;
  },
  976: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4881) == FALSE;
  },
  1557: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5108) == TRUE && gv.GetBool(4764) == FALSE;
  },
  1064: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4755) == FALSE && ((((gv.GetInt(105) == 150000 || gv.GetInt(105) == 150100) || gv.GetInt(105) == 150200) || gv.GetInt(105) == 150400) || gv.GetInt(105) == 150500);
  },
  1653: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7118) == FALSE && gv.GetBool(3916) == TRUE;
  },
  1413: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5049) == FALSE;
  },
  1295: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5049) == TRUE;
  },
  1294: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5996) == TRUE;
  },
  1293: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5995) == TRUE;
  },
  1292: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5994) == TRUE;
  },
  1288: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5990) == TRUE;
  },
  1287: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5989) == TRUE;
  },
  1286: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5988) == TRUE;
  },
  1285: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5987) == TRUE;
  },
  1284: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5986) == TRUE;
  },
  1243: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5051) == TRUE && gv.GetBool(5052) == TRUE) && gv.GetBool(5053) == FALSE || (gv.GetBool(5051) == FALSE && gv.GetBool(5052) == TRUE) && gv.GetBool(5053) == TRUE) || (gv.GetBool(5051) == TRUE && gv.GetBool(5052) == FALSE) && gv.GetBool(5053) == TRUE;
  },
  1242: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5051) == TRUE || gv.GetBool(5052) == TRUE) || gv.GetBool(5053) == TRUE;
  },
  1137: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5059) == TRUE || gv.GetBool(5050) == TRUE) || gv.GetBool(5058) == TRUE;
  },
  1102: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5049) == FALSE && gv.GetBool(5058) == FALSE) && gv.GetInt(13) == 140200;
  },
  1099: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4890) == FALSE && gv.GetInt(13) == 90400;
  },
  1098: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4799) == FALSE && gv.GetInt(105) == 160101;
  },
  1635: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3916) == TRUE && gv.GetBool(5007) == FALSE) && gv.GetBool(7014) == FALSE;
  },
  1566: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(5007) == FALSE;
  },
  1650: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7099) == TRUE;
  },
  1528: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6570) == TRUE && gv.GetBool(4618) == FALSE) && (gv.GetBool(4617) == TRUE || gv.GetBool(5254) == TRUE);
  },
  1240: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4617) == TRUE && gv.GetBool(4616) == FALSE;
  },
  1044: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5254) == TRUE && gv.GetBool(4621) == FALSE;
  },
  1014: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5254) == FALSE && gv.GetBool(7008) == FALSE) && gv.GetBool(4617) == FALSE) && ((gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  1717: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4916) == FALSE && gv.GetBool(7173) == TRUE) && gv.GetBool(4911) == TRUE;
  },
  1553: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4906) == TRUE && gv.GetBool(6255) == TRUE;
  },
  1239: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4917) == TRUE && gv.GetBool(4916) == TRUE) && gv.GetBool(5885) == TRUE;
  },
  1238: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4917) == TRUE && gv.GetBool(4916) == TRUE;
  },
  1237: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7173) == TRUE && gv.GetBool(4911) == TRUE;
  },
  1096: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5365) == FALSE && gv.GetInt(105) == 200300;
  },
  1182: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5536) == TRUE;
  },
  1181: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4713) == TRUE;
  },
  1180: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4744) == TRUE;
  },
  1179: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4715) == TRUE;
  },
  1178: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4716) == TRUE;
  },
  1177: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4717) == TRUE;
  },
  1176: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4718) == TRUE;
  },
  1175: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4737) == TRUE;
  },
  1174: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5527) == TRUE;
  },
  1094: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4681) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 20;
  },
  1093: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4670) == FALSE && gv.GetInt(13) == 110300;
  },
  1519: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6558) == TRUE && gv.GetBool(4624) == FALSE) && gv.GetBool(4622) == TRUE;
  },
  1518: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6558) == TRUE && gv.GetBool(4624) == FALSE) && gv.GetBool(4623) == TRUE) && gv.GetBool(4622) == FALSE;
  },
  1231: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4623) == TRUE && gv.GetBool(4622) == FALSE;
  },
  1092: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4626) == FALSE;
  },
  1040: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4622) == TRUE && gv.GetBool(4623) == TRUE;
  },
  1039: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4622) == TRUE && gv.GetBool(4626) == TRUE;
  },
  1038: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5239) == FALSE;
  },
  1034: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(4624) == FALSE;
  },
  968: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4663) == FALSE;
  },
  967: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4869) == TRUE;
  },
  966: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4664) == FALSE;
  },
  893: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4664) == TRUE && gv.GetBool(4665) == FALSE;
  },
  1504: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6540) == FALSE;
  },
  1517: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6557) == FALSE;
  },
  1514: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6554) == FALSE;
  },
  1513: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6549) == FALSE;
  },
  1512: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6548) == FALSE;
  },
  1516: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6556) == FALSE;
  },
  1515: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6555) == FALSE;
  },
  1506: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6542) == FALSE;
  },
  1505: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6541) == FALSE;
  },
  1507: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6543) == FALSE;
  },
  1511: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6547) == FALSE;
  },
  1510: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6546) == FALSE;
  },
  1509: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6545) == FALSE;
  },
  1508: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6544) == FALSE;
  },
  1529: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6582) == FALSE;
  },
  1558: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6825) == FALSE;
  },
  1439: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6408) == FALSE;
  },
  1438: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6407) == FALSE;
  },
  1440: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6409) == FALSE;
  },
  1441: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6410) == FALSE;
  },
  1437: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6406) == FALSE;
  },
  1436: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6405) == FALSE;
  },
  1434: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6403) == FALSE;
  },
  1435: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6404) == FALSE;
  },
  1443: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6412) == FALSE;
  },
  1442: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6411) == FALSE;
  },
  1444: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6413) == FALSE;
  },
  1445: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6414) == FALSE;
  },
  1447: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6416) == FALSE;
  },
  1446: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6415) == FALSE;
  },
  1449: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6418) == FALSE;
  },
  1448: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6417) == FALSE;
  },
  1464: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6432) == FALSE;
  },
  1463: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6431) == FALSE;
  },
  1466: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6434) == FALSE;
  },
  1465: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6433) == FALSE;
  },
  1460: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6428) == FALSE;
  },
  1459: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6427) == FALSE;
  },
  1462: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6430) == FALSE;
  },
  1461: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6429) == FALSE;
  },
  1451: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6420) == FALSE;
  },
  1450: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6419) == FALSE;
  },
  1454: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6422) == FALSE;
  },
  1452: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6421) == FALSE;
  },
  1456: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6424) == FALSE;
  },
  1455: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6423) == FALSE;
  },
  1458: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6426) == FALSE;
  },
  1457: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6425) == FALSE;
  },
  1468: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6436) == FALSE;
  },
  1470: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6438) == FALSE;
  },
  1469: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6437) == FALSE;
  },
  1472: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6440) == FALSE;
  },
  1471: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6439) == FALSE;
  },
  1474: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6442) == FALSE;
  },
  1473: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6441) == FALSE;
  },
  1476: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6444) == FALSE;
  },
  1475: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6443) == FALSE;
  },
  1478: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6446) == FALSE;
  },
  1477: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6445) == FALSE;
  },
  1480: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6435) == FALSE;
  },
  1479: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6449) == FALSE;
  },
  1433: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6402) == FALSE;
  },
  1432: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6401) == FALSE;
  },
  1431: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6400) == FALSE;
  },
  1430: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6399) == FALSE;
  },
  1429: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6398) == FALSE;
  },
  1428: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6397) == FALSE;
  },
  1427: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6396) == FALSE;
  },
  1426: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6395) == FALSE;
  },
  1425: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6394) == FALSE;
  },
  1424: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6393) == FALSE;
  },
  1423: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6392) == FALSE;
  },
  1422: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6391) == FALSE;
  },
  1421: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6390) == FALSE;
  },
  1420: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6389) == FALSE;
  },
  1419: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6388) == FALSE;
  },
  1418: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6387) == FALSE;
  },
  1417: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6386) == FALSE;
  },
  1416: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6385) == FALSE;
  },
  1415: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6384) == FALSE;
  },
  1408: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6377) == FALSE;
  },
  1406: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6376) == FALSE;
  },
  1081: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return !((gv.GetInt(15) == 5 && gv.GetBool(3960) == TRUE || gv.GetInt(16) == 5 && gv.GetBool(4169) == TRUE) || gv.GetInt(17) == 5 && gv.GetBool(4281) == TRUE);
  },
  1080: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(15) == 5 && gv.GetBool(3960) == TRUE || gv.GetInt(16) == 5 && gv.GetBool(4169) == TRUE) || gv.GetInt(17) == 5 && gv.GetBool(4281) == TRUE;
  },
  477: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3131) == TRUE;
  },
  476: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3130) == TRUE;
  },
  475: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3129) == TRUE;
  },
  474: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3128) == TRUE;
  },
  473: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3125) == TRUE;
  },
  472: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3124) == TRUE;
  },
  465: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3097) == TRUE;
  },
  459: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3074) == TRUE;
  },
  458: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3072) == TRUE;
  },
  457: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3070) == TRUE;
  },
  456: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3069) == TRUE;
  },
  455: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3068) == TRUE;
  },
  449: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3014) == TRUE;
  },
  448: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3011) == TRUE;
  },
  447: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3009) == TRUE;
  },
  446: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3008) == TRUE;
  },
  445: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3007) == TRUE;
  },
  470: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2897) == TRUE && bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE;
  },
  568: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3384) == TRUE && gv.GetBool(2407) == FALSE;
  },
  562: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2404) == TRUE && gv.GetBool(3384) == TRUE;
  },
  558: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2405) == FALSE && gv.GetBool(2121) == TRUE;
  },
  223: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2401) == TRUE && ((gv.GetBool(2439) == TRUE || gv.GetBool(2439) == TRUE) || gv.GetBool(2410) == TRUE);
  },
  218: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2448) == TRUE;
  },
  214: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2447) == FALSE && gv.GetBool(2441) == TRUE;
  },
  213: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2447) == FALSE && gv.GetBool(2442) == TRUE;
  },
  225: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2119) == TRUE && gv.GetBool(2121) == FALSE;
  },
  181: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2124) == TRUE || gv.GetBool(2125) == TRUE;
  },
  180: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2122) == TRUE || gv.GetBool(2123) == TRUE;
  },
  1637: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3825) == TRUE && gv.GetBool(5271) == TRUE;
  },
  1636: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5271) == TRUE && gv.GetBool(3828) == TRUE;
  },
  1205: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3943) == FALSE && gv.GetBool(3941) == FALSE;
  },
  451: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3028) == TRUE || gv.GetBool(3029) == TRUE;
  },
  450: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3024) == TRUE || gv.GetBool(3026) == TRUE) || gv.GetBool(3025) == TRUE;
  },
  471: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3049) == TRUE && gv.GetBool(3056) == FALSE;
  },
  454: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3049) == TRUE && gv.GetBool(3056) == FALSE || gv.GetBool(3049) == FALSE;
  },
  1296: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4465) == TRUE;
  },
  1262: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5271) == TRUE && gv.GetBool(4464) == TRUE;
  },
  1261: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5271) == TRUE && gv.GetBool(4464) == FALSE;
  },
  1260: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4459) == TRUE && gv.GetBool(4464) == FALSE;
  },
  2013: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7767) == TRUE;
  },
  1710: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(128) == 1;
  },
  1709: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(7187) == TRUE && gv.GetBool(7191) == TRUE) && gv.GetInt(129) != 2 || (gv.GetBool(7190) == TRUE && gv.GetBool(7191) == TRUE) && gv.GetInt(129) != 2;
  },
  1708: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7188) == TRUE && gv.GetBool(7191) == FALSE;
  },
  1707: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7191) == TRUE && gv.GetBool(7188) == TRUE;
  },
  1706: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(7187) == TRUE && gv.GetBool(7190) == TRUE) && gv.GetInt(129) == 2;
  },
  1705: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(7187) == TRUE && gv.GetBool(7190) == TRUE) && gv.GetInt(129) != 2;
  },
  1122: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 11 || gv.GetBool(4982) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 9;
  },
  1121: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 11 || gv.GetBool(4983) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 9;
  },
  1120: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 13 || gv.GetBool(4982) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 11;
  },
  1119: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 13 || gv.GetBool(4983) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 11;
  },
  1118: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 8 || gv.GetBool(4983) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 6;
  },
  1117: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 8 || gv.GetBool(4982) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 6;
  },
  1003: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4982) == TRUE || gv.GetBool(4983) == TRUE;
  },
  668: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2608) == TRUE && gv.GetBool(3927) == FALSE;
  },
  667: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3915) == FALSE && gv.GetBool(3922) == FALSE) && gv.GetBool(3918) == FALSE;
  },
  666: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3915) == TRUE || gv.GetBool(3922) == TRUE) || gv.GetBool(3918) == TRUE;
  },
  656: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3853) == TRUE && gv.GetBool(2607) == TRUE;
  },
  655: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2608) == TRUE && gv.GetBool(3851) == FALSE;
  },
  653: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2507) == TRUE && bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE;
  },
  777: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2567) == FALSE && gv.GetBool(2507) == FALSE;
  },
  776: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2567) == FALSE && gv.GetBool(2507) == TRUE;
  },
  1351: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2996) == FALSE && bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE;
  },
  531: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3264) == TRUE && gv.GetBool(2760) == FALSE;
  },
  440: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2987) == TRUE && gv.GetBool(2601) == TRUE;
  },
  438: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2985) == TRUE && gv.GetBool(2987) == FALSE;
  },
  657: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3850) == TRUE && gv.GetBool(3858) == FALSE) && gv.GetBool(3859) == FALSE;
  },
  311: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2649) == TRUE && gv.GetBool(2576) == FALSE;
  },
  654: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2606) == TRUE && gv.GetBool(2607) == FALSE;
  },
  652: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2606) == TRUE && (gv.GetBool(2610) == FALSE && gv.GetBool(2660) == FALSE);
  },
  712: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2944) == TRUE && gv.GetBool(2589) == FALSE;
  },
  711: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2944) == TRUE && gv.GetBool(2571) == FALSE;
  },
  1323: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2944) == FALSE && gv.GetBool(6086) == FALSE;
  },
  1322: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2944) == FALSE && gv.GetBool(6087) == FALSE;
  },
  1493: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2733) == FALSE && gv.GetBool(2941) == TRUE) && gv.GetBool(2944) == TRUE;
  },
  663: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2944) == FALSE || gv.GetBool(2733) == FALSE) || gv.GetBool(2940) == FALSE;
  },
  660: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3907) == FALSE && bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE;
  },
  1670: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2713) == FALSE && gv.GetBool(2686) == FALSE;
  },
  1313: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2830) == TRUE && gv.GetBool(2686) == FALSE) && gv.GetBool(2868) == FALSE;
  },
  1375: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6260) == FALSE && gv.GetBool(2700) == TRUE) && gv.GetBool(2709) == FALSE) && gv.GetBool(2701) == FALSE;
  },
  1360: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6317) == FALSE && gv.GetBool(2690) == TRUE;
  },
  1125: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5411) == TRUE && gv.GetBool(2760) == FALSE;
  },
  1124: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5411) == TRUE && gv.GetBool(2561) == FALSE;
  },
  1045: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2776) == TRUE;
  },
  1026: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2771) == TRUE && gv.GetBool(5127) == FALSE;
  },
  1022: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(33) == Argument;
  },
  1021: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(34) == Argument;
  },
  705: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2800) == TRUE && gv.GetBool(2794) == FALSE;
  },
  432: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2862) == TRUE && bioWorld.GetLocalIntegerVariable(1, 'GetTalkToCount') == 1;
  },
  436: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2778) == TRUE && gv.GetBool(2862) == TRUE) && bioWorld.GetLocalIntegerVariable(1, 'GetTalkToCount') == 3;
  },
  433: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2830) == TRUE && bioWorld.GetLocalIntegerVariable(1, 'GetTalkToCount') == 2;
  },
  373: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2841) == FALSE && gv.GetBool(2678) == FALSE;
  },
  372: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2841) == FALSE && gv.GetBool(2678) == TRUE) && gv.GetBool(2677) == FALSE;
  },
  371: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2841) == TRUE && gv.GetBool(2684) == FALSE;
  },
  359: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2803) == TRUE && gv.GetBool(2687) == TRUE;
  },
  358: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2800) == TRUE && gv.GetBool(2794) == FALSE;
  },
  1352: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2684) == TRUE && gv.GetBool(2681) == FALSE;
  },
  1740: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(2682) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2690) == FALSE) && gv.GetBool(2693) == FALSE) && gv.GetBool(2809) == FALSE) && gv.GetBool(6452) == FALSE;
  },
  1556: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2677) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 8;
  },
  1555: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2677) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 4;
  },
  1550: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6052) == FALSE && gv.GetBool(2804) == FALSE) && gv.GetBool(2687) == FALSE) && gv.GetBool(2693) == FALSE;
  },
  1481: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2693) == TRUE || gv.GetBool(6452) == TRUE;
  },
  1379: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2804) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2693) == FALSE;
  },
  1338: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6052) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2693) == FALSE) && gv.GetBool(2804) == FALSE;
  },
  1320: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2804) == FALSE && gv.GetBool(2677) == FALSE) && gv.GetBool(6053) == FALSE;
  },
  1055: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2678) == FALSE && gv.GetBool(2681) == FALSE) && gv.GetBool(2677) == FALSE) && gv.GetBool(2742) == TRUE;
  },
  1054: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2684) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2690) == FALSE) && gv.GetBool(2693) == FALSE;
  },
  1029: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(2797) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2690) == FALSE) && gv.GetBool(2693) == FALSE) && gv.GetBool(2800) == FALSE;
  },
  767: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2687) == TRUE || gv.GetBool(4318) == TRUE;
  },
  700: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2800) == FALSE && gv.GetBool(2687) == FALSE) && gv.GetBool(2693) == FALSE;
  },
  532: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2687) == TRUE && gv.GetBool(2508) == TRUE;
  },
  443: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2797) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2690) == FALSE) && gv.GetBool(2693) == FALSE;
  },
  404: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2681) == TRUE && gv.GetBool(2682) == FALSE) && gv.GetBool(2868) == FALSE;
  },
  401: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2682) == TRUE && gv.GetBool(2797) == FALSE;
  },
  400: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2682) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2690) == FALSE) && gv.GetBool(2693) == FALSE;
  },
  376: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2687) == TRUE || gv.GetBool(2690) == TRUE;
  },
  363: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2797) == TRUE && gv.GetBool(2561) == TRUE;
  },
  361: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2804) == FALSE && gv.GetBool(2686) == FALSE;
  },
  774: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2696) == TRUE && gv.GetBool(2701) == FALSE) && gv.GetBool(2704) == FALSE;
  },
  772: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2700) == TRUE && gv.GetBool(2704) == TRUE;
  },
  516: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2696) == TRUE && gv.GetBool(2697) == FALSE;
  },
  515: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2697) == TRUE && gv.GetBool(2700) == FALSE;
  },
  402: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2696) == TRUE && gv.GetBool(2701) == FALSE;
  },
  343: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2702) == TRUE && gv.GetBool(2763) == TRUE;
  },
  341: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2711) == TRUE && gv.GetBool(2763) == TRUE;
  },
  340: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2700) == TRUE && gv.GetBool(2698) == TRUE;
  },
  327: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2700) == TRUE && gv.GetBool(2709) == FALSE) && gv.GetBool(2701) == FALSE;
  },
  1750: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(2688) == TRUE && gv.GetBool(2687) == FALSE) && gv.GetBool(2690) == FALSE) && gv.GetBool(2693) == FALSE) && gv.GetBool(2809) == FALSE) && gv.GetBool(6452) == FALSE;
  },
  1554: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2677) == FALSE && bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE;
  },
  771: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4321) == TRUE && gv.GetBool(3218) == FALSE;
  },
  426: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2724) == TRUE && gv.GetBool(2677) == FALSE;
  },
  407: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2809) == TRUE && gv.GetBool(2687) == TRUE;
  },
  388: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2713) == TRUE && gv.GetBool(2752) == TRUE;
  },
  387: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2690) == TRUE && gv.GetBool(2752) == TRUE;
  },
  386: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2687) == TRUE && gv.GetBool(2752) == TRUE;
  },
  385: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2682) == TRUE && gv.GetBool(2752) == TRUE;
  },
  384: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2741) == TRUE && gv.GetBool(2752) == TRUE;
  },
  382: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2687) == TRUE && gv.GetBool(2760) == TRUE;
  },
  381: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2713) == TRUE && gv.GetBool(2760) == TRUE;
  },
  380: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2690) == TRUE && gv.GetBool(2760) == TRUE;
  },
  339: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2690) == FALSE && gv.GetBool(2713) == FALSE;
  },
  328: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2713) == TRUE || gv.GetBool(2709) == TRUE;
  },
  1646: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(7083) == TRUE && gv.GetBool(7084) == TRUE) && gv.GetBool(7085) == TRUE) && gv.GetBool(7086) == TRUE;
  },
  1645: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(7078) == TRUE && gv.GetBool(7079) == TRUE) && gv.GetBool(7080) == TRUE) && gv.GetBool(7082) == TRUE) && gv.GetBool(7081) == TRUE;
  },
  1737: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5520) == TRUE && gv.GetBool(5522) == FALSE) && gv.GetBool(2514) == TRUE;
  },
  1736: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5520) == TRUE && gv.GetBool(5522) == FALSE) && gv.GetBool(5877) == TRUE) && gv.GetBool(5879) == FALSE;
  },
  1173: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5522) == TRUE && gv.GetBool(2498) == FALSE;
  },
  1172: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5522) == TRUE && (gv.GetBool(2490) == TRUE || gv.GetBool(2491) == TRUE)) && gv.GetBool(5524) == TRUE;
  },
  1703: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2499) == FALSE && gv.GetBool(4357) == TRUE;
  },
  1658: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2507) == TRUE && gv.GetBool(3161) == FALSE) && gv.GetBool(2514) == TRUE;
  },
  1247: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2616) == TRUE;
  },
  1246: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2498) == TRUE;
  },
  1245: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2499) == TRUE && gv.GetBool(2498) == FALSE;
  },
  1745: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2491) == TRUE && gv.GetBool(2790) == TRUE;
  },
  1739: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2786) == TRUE && gv.GetBool(2790) == FALSE) && gv.GetBool(2514) == TRUE;
  },
  1738: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5300) == TRUE && gv.GetBool(5301) == FALSE) && gv.GetBool(2786) == TRUE) && gv.GetBool(2790) == FALSE;
  },
  1386: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4048) == TRUE && gv.GetBool(2790) == FALSE;
  },
  681: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2790) == TRUE && (gv.GetBool(2490) == TRUE || gv.GetBool(2491) == TRUE);
  },
  680: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2790) == TRUE && gv.GetBool(2498) == FALSE;
  },
  1618: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2518) == TRUE && gv.GetBool(2889) == FALSE) && gv.GetBool(2498) == TRUE;
  },
  1617: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2518) == TRUE && gv.GetBool(2889) == FALSE) && gv.GetBool(2498) == FALSE;
  },
  1576: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(111) < 4 && gv.GetBool(2519) == FALSE) && gv.GetBool(6874) == TRUE) && (gv.GetBool(2848) == TRUE && gv.GetBool(2616) == FALSE || gv.GetBool(3773) == TRUE);
  },
  1340: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2518) == FALSE && gv.GetBool(6140) == TRUE;
  },
  685: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4053) == FALSE && gv.GetBool(2499) == TRUE;
  },
  412: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2883) == TRUE && gv.GetBool(2884) == FALSE;
  },
  410: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2518) == TRUE && gv.GetBool(2884) == FALSE;
  },
  409: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2890) == FALSE && gv.GetBool(2518) == TRUE) && gv.GetBool(2884) == FALSE;
  },
  408: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2883) == FALSE && gv.GetBool(2518) == TRUE) && gv.GetBool(2884) == TRUE;
  },
  405: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2884) == TRUE && gv.GetBool(2883) == TRUE;
  },
  1017: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5116) == FALSE && gv.GetBool(2616) == TRUE;
  },
  1016: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2616) == TRUE && gv.GetBool(5115) == FALSE;
  },
  1015: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5114) == FALSE && gv.GetBool(2616) == TRUE;
  },
  1011: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2848) == FALSE && gv.GetBool(4711) == FALSE) && gv.GetBool(2616) == FALSE;
  },
  1010: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4709) == FALSE && gv.GetBool(4711) == TRUE) && gv.GetBool(2616) == FALSE;
  },
  1624: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6468) == TRUE;
  },
  1623: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6467) == TRUE && gv.GetBool(6468) == FALSE;
  },
  1622: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6466) == TRUE && gv.GetBool(6467) == FALSE;
  },
  1621: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6465) == TRUE && gv.GetBool(6466) == FALSE;
  },
  1620: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6464) == TRUE && gv.GetBool(6465) == FALSE;
  },
  1619: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6463) == TRUE && gv.GetBool(6464) == FALSE;
  },
  884: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(21) == Argument;
  },
  1593: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6278) == TRUE && gv.GetBool(6279) == FALSE;
  },
  1592: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6276) == TRUE && gv.GetBool(6277) == FALSE;
  },
  1591: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6274) == TRUE && gv.GetBool(6275) == FALSE;
  },
  1590: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6272) == TRUE && gv.GetBool(6273) == FALSE;
  },
  1589: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6270) == TRUE && gv.GetBool(6271) == FALSE;
  },
  1588: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6268) == TRUE && gv.GetBool(6269) == FALSE;
  },
  1587: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5878) == TRUE && gv.GetBool(5880) == FALSE;
  },
  1586: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5877) == TRUE && gv.GetBool(5879) == FALSE;
  },
  1585: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5873) == TRUE && gv.GetBool(5874) == FALSE;
  },
  1584: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5309) == TRUE && gv.GetBool(5310) == FALSE;
  },
  1583: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5306) == TRUE && gv.GetBool(5307) == FALSE;
  },
  1582: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5303) == TRUE && gv.GetBool(5304) == FALSE;
  },
  1581: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5300) == TRUE && gv.GetBool(5301) == FALSE;
  },
  1580: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5298) == TRUE && gv.GetBool(5299) == FALSE;
  },
  1579: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5296) == TRUE && gv.GetBool(5297) == FALSE;
  },
  1578: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5294) == TRUE && gv.GetBool(5295) == FALSE;
  },
  1647: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2848) == TRUE || gv.GetBool(5118) == TRUE;
  },
  1050: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3757) == TRUE;
  },
  1595: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3239) == FALSE || gv.GetBool(6919) == FALSE && gv.GetBool(2616) == TRUE;
  },
  1342: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2616) == TRUE && gv.GetBool(3773) == FALSE;
  },
  635: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2498) == FALSE && gv.GetBool(2990) == TRUE;
  },
  535: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3272) == FALSE && gv.GetBool(2508) == FALSE;
  },
  534: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3272) == FALSE && gv.GetBool(3160) == TRUE;
  },
  533: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3272) == FALSE && gv.GetBool(2506) == FALSE;
  },
  439: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(2990) == FALSE && gv.GetBool(2490) == FALSE) && gv.GetBool(2491) == FALSE) && gv.GetBool(2492) == FALSE) && gv.GetBool(2493) == FALSE;
  },
  390: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2848) == FALSE && gv.GetBool(2616) == FALSE;
  },
  355: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2789) == TRUE;
  },
  1735: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2785) == TRUE && gv.GetBool(2782) == FALSE) && gv.GetBool(2514) == TRUE;
  },
  1734: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2785) == TRUE && gv.GetBool(2782) == FALSE) && gv.GetBool(5298) == TRUE) && gv.GetBool(5299) == FALSE;
  },
  1344: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4036) == TRUE || gv.GetBool(4037) == TRUE) || gv.GetBool(4038) == TRUE;
  },
  1185: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4036) == TRUE && gv.GetBool(4037) == TRUE) && gv.GetBool(4038) == TRUE;
  },
  775: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2490) == TRUE || gv.GetBool(2491) == TRUE) && gv.GetBool(2782) == TRUE;
  },
  411: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2783) == TRUE && gv.GetBool(2782) == FALSE;
  },
  354: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2788) == FALSE;
  },
  353: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2787) == FALSE;
  },
  352: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2785) == FALSE;
  },
  406: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2887) == FALSE && (gv.GetBool(2492) == TRUE || gv.GetBool(2493) == TRUE);
  },
  246: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2492) == TRUE || gv.GetBool(2493) == TRUE) || gv.GetBool(2514) == TRUE;
  },
  245: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2514) == FALSE && (gv.GetBool(2490) == TRUE || gv.GetBool(2491) == TRUE);
  },
  1063: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5322) == FALSE && gv.GetBool(2616) == TRUE;
  },
  1062: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5321) == FALSE && gv.GetBool(2616) == TRUE;
  },
  524: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3191) == FALSE || gv.GetBool(3192) == FALSE;
  },
  523: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3190) == FALSE || gv.GetBool(3192) == FALSE;
  },
  522: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3190) == FALSE || gv.GetBool(3191) == FALSE;
  },
  521: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3190) == FALSE && gv.GetBool(3191) == FALSE) && gv.GetBool(3192) == FALSE;
  },
  520: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3190) == TRUE && gv.GetBool(3192) == TRUE;
  },
  519: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3191) == TRUE && gv.GetBool(3192) == TRUE;
  },
  518: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3190) == TRUE && gv.GetBool(3191) == TRUE;
  },
  517: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3190) == TRUE && gv.GetBool(3191) == TRUE) && gv.GetBool(3192) == TRUE;
  },
  600: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3615) == TRUE && gv.GetBool(3616) == FALSE;
  },
  391: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2989) == FALSE && gv.GetBool(2616) == TRUE;
  },
  708: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == FALSE && gv.GetBool(2507) == FALSE;
  },
  707: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == TRUE && gv.GetBool(2507) == FALSE;
  },
  686: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2498) == TRUE;
  },
  606: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2489) == TRUE && gv.GetBool(2955) == FALSE;
  },
  1049: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2499) == TRUE && gv.GetBool(2498) == FALSE;
  },
  1241: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4332) == TRUE && gv.GetBool(2499) == TRUE) && gv.GetBool(5519) == FALSE;
  },
  1230: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5842) == TRUE;
  },
  1171: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4332) == TRUE && gv.GetBool(5519) == FALSE;
  },
  414: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2834) == FALSE && gv.GetBool(2500) == FALSE;
  },
  362: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2827) == FALSE && gv.GetBool(2498) == FALSE;
  },
  360: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2805) == FALSE && gv.GetBool(2498) == FALSE;
  },
  357: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2799) == FALSE;
  },
  2018: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7797) == TRUE;
  },
  467: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3098) == TRUE && gv.GetBool(2507) == TRUE) && gv.GetBool(2508) == TRUE;
  },
  724: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2364) == TRUE && gv.GetBool(3486) == FALSE;
  },
  599: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3102) == TRUE && gv.GetBool(2507) == TRUE) && gv.GetBool(2508) == TRUE;
  },
  468: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2367) == TRUE && gv.GetBool(2507) == TRUE) && gv.GetBool(2508) == TRUE;
  },
  466: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2364) == TRUE && gv.GetBool(2324) == FALSE;
  },
  1350: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(13) == 10101 && gv.GetBool(6286) == FALSE) && gv.GetBool(3721) == TRUE) && gv.GetBool(3916) == FALSE;
  },
  1349: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(13) == 10101 && gv.GetBool(6285) == FALSE) && gv.GetBool(6287) == FALSE) && gv.GetBool(4398) == TRUE;
  },
  1348: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(13) == 10101 && gv.GetBool(6284) == FALSE) && gv.GetBool(4398) == FALSE;
  },
  1319: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(6026) == TRUE && gv.GetInt(66) != 3 || gv.GetBool(6027) == TRUE && gv.GetInt(66) != 4) || gv.GetBool(6028) == TRUE && gv.GetInt(66) != 5) || gv.GetBool(6047) == TRUE && gv.GetInt(66) != 8) || gv.GetBool(6048) == TRUE && gv.GetInt(66) != 9;
  },
  1318: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 9 && gv.GetBool(6048) == TRUE;
  },
  1317: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 8 && gv.GetBool(6047) == TRUE;
  },
  1316: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 7 && gv.GetBool(6046) == TRUE;
  },
  1315: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 6 && gv.GetBool(6045) == TRUE;
  },
  1314: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) == 6;
  },
  1305: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((((((gv.GetInt(66) == 0 && gv.GetBool(6024) == FALSE) && gv.GetBool(6025) == FALSE) && gv.GetBool(6026) == FALSE) && gv.GetBool(6027) == FALSE) && gv.GetBool(6028) == FALSE) && gv.GetBool(6045) == FALSE) && gv.GetBool(6046) == FALSE) && gv.GetBool(6047) == FALSE) && gv.GetBool(6048) == FALSE;
  },
  1304: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetInt(66) == 0 && gv.GetBool(6023) == FALSE || gv.GetInt(66) == 1 && gv.GetBool(6024) == FALSE) || gv.GetInt(66) == 2 && gv.GetBool(6025) == FALSE) || gv.GetInt(66) == 3 && gv.GetBool(6026) == FALSE) || gv.GetInt(66) == 4 && gv.GetBool(6027) == FALSE) || gv.GetInt(66) == 5 && gv.GetBool(6028) == FALSE;
  },
  1303: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 5 && gv.GetBool(6028) == TRUE;
  },
  1302: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 4 && gv.GetBool(6027) == TRUE;
  },
  1301: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 3 && gv.GetBool(6026) == TRUE;
  },
  1300: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 2 && gv.GetBool(6025) == TRUE;
  },
  1299: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 1 && gv.GetBool(6024) == TRUE;
  },
  1298: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(66) != 0 && gv.GetBool(6023) == TRUE;
  },
  1742: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3941) == FALSE && gv.GetBool(3944) == TRUE;
  },
  1278: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5972) == TRUE && gv.GetBool(5973) == FALSE) && gv.GetBool(4398) == TRUE) && gv.GetBool(4388) == FALSE;
  },
  1277: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5972) == FALSE;
  },
  994: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4939) == TRUE && gv.GetBool(4940) == FALSE) && gv.GetBool(3721) == TRUE;
  },
  993: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4939) == FALSE;
  },
  958: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4809) == TRUE && gv.GetBool(4809) == FALSE) && !((gv.GetBool(4417) || gv.GetBool(4413)) && gv.GetBool(3721) == FALSE);
  },
  957: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4809) == TRUE && gv.GetBool(4811) == FALSE) && gv.GetBool(4414) == TRUE) && !((gv.GetBool(4417) || gv.GetBool(4413)) && gv.GetBool(3721) == FALSE);
  },
  956: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4809) == TRUE && gv.GetBool(4810) == FALSE) && gv.GetBool(4027) == TRUE) && !((gv.GetBool(4417) || gv.GetBool(4413)) && gv.GetBool(3721) == FALSE);
  },
  955: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4808) == FALSE && gv.GetBool(4807) == TRUE) && gv.GetBool(3948) == TRUE) && !((((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE) && gv.GetInt(1) == 1) && gv.GetBool(4925) == FALSE);
  },
  954: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4807) == FALSE && gv.GetBool(3721) == TRUE) && !((((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE) && gv.GetInt(1) == 1) && gv.GetBool(4925) == FALSE);
  },
  953: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4806) == FALSE && gv.GetBool(3721) == FALSE;
  },
  1398: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4388) == FALSE && ((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE)) && gv.GetBool(4834) == FALSE;
  },
  965: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(27) == 4;
  },
  964: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(27) == 3;
  },
  963: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(27) >= 1;
  },
  1385: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE) && gv.GetBool(4877) == FALSE;
  },
  1503: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6538) == TRUE && gv.GetBool(4849) == FALSE) && gv.GetBool(4847) == TRUE;
  },
  1393: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetCredits') >= 500;
  },
  1390: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6353) == TRUE || gv.GetBool(6354) == TRUE;
  },
  1388: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(1) == 3 && gv.GetBool(4847) == TRUE) && gv.GetBool(4849) == FALSE) && ((gv.GetBool(2507) == TRUE || gv.GetBool(2508) == TRUE) || gv.GetBool(2506) == TRUE);
  },
  1387: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(1) == 3 && gv.GetBool(4847) == FALSE) && ((gv.GetBool(2507) == TRUE || gv.GetBool(2508) == TRUE) || gv.GetBool(2506) == TRUE);
  },
  1648: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(29) == 1 && (gv.GetInt(28) == 1 || gv.GetInt(28) == 2);
  },
  1502: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4844) == TRUE && gv.GetBool(6537) == TRUE) && gv.GetBool(4860) == FALSE;
  },
  1397: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(1) == 2 && ((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE)) && gv.GetBool(4844) == FALSE) && gv.GetBool(4388) == FALSE;
  },
  1395: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4863) == TRUE || gv.GetBool(4864) == TRUE;
  },
  1394: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4861) == TRUE || gv.GetBool(4862) == TRUE;
  },
  1392: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4844) == TRUE && gv.GetBool(6355) == FALSE;
  },
  979: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(28) < 3;
  },
  978: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(28) == 2;
  },
  972: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(29) == 1;
  },
  970: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(28) == 1;
  },
  969: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(28) >= 3;
  },
  1501: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4925) == TRUE && gv.GetBool(6534) == TRUE) && gv.GetBool(4927) == FALSE;
  },
  1347: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE) && gv.GetInt(1) == 1) && gv.GetBool(4925) == FALSE;
  },
  1346: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE) && gv.GetInt(1) == 1) && gv.GetBool(4927) == FALSE;
  },
  990: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4930) == TRUE && gv.GetBool(4931) == TRUE;
  },
  989: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4928) == TRUE && gv.GetBool(4928) == TRUE;
  },
  1500: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6533) == TRUE && gv.GetBool(4819) == FALSE) && gv.GetBool(4818) == TRUE;
  },
  1373: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4818) == TRUE && gv.GetBool(4819) == FALSE;
  },
  1372: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4819) == FALSE;
  },
  1371: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3721) == TRUE && gv.GetBool(4821) == FALSE) && gv.GetBool(4822) == FALSE) && gv.GetBool(5903) == FALSE;
  },
  1499: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6532) == TRUE && gv.GetBool(5901) == FALSE) && gv.GetBool(4813) == TRUE;
  },
  1378: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6339) == TRUE && gv.GetBool(6340) == TRUE) && gv.GetBool(6341) == TRUE) && gv.GetBool(6338) == FALSE;
  },
  1377: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6339) == TRUE && gv.GetBool(6340) == TRUE) && gv.GetBool(6341) == FALSE) && gv.GetBool(6338) == FALSE;
  },
  1376: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6339) == TRUE && gv.GetBool(6340) == FALSE) && gv.GetBool(6341) == FALSE) && gv.GetBool(6338) == FALSE;
  },
  1361: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4816) == TRUE && gv.GetBool(5901) == FALSE;
  },
  1359: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4813) == TRUE && gv.GetBool(4814) == TRUE) && gv.GetBool(4815) == TRUE) && gv.GetBool(4816) == FALSE;
  },
  1358: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4813) == TRUE && gv.GetBool(4814) == TRUE) && gv.GetBool(4815) == FALSE;
  },
  1357: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4813) == TRUE && gv.GetBool(4814) == FALSE;
  },
  1656: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4778) == TRUE;
  },
  1498: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6531) == TRUE && gv.GetBool(4783) == FALSE) && gv.GetBool(4778) == TRUE;
  },
  1381: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4388) == TRUE && gv.GetBool(4783) == FALSE;
  },
  1496: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6471) == TRUE && gv.GetBool(4748) == FALSE) && gv.GetBool(4745) == TRUE;
  },
  1334: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6108) == FALSE;
  },
  1333: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6106) == FALSE;
  },
  1275: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6770) == TRUE || gv.GetBool(6771) == TRUE;
  },
  1274: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4748) == FALSE && gv.GetBool(4749) == FALSE) && gv.GetBool(4398) == TRUE || (gv.GetBool(4751) == TRUE || gv.GetBool(4750) == TRUE);
  },
  1273: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4398) == TRUE && gv.GetBool(4745) == FALSE;
  },
  1269: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4748) == FALSE && gv.GetBool(4751) == FALSE) && gv.GetBool(4398) == TRUE;
  },
  1492: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6461) == TRUE && gv.GetBool(4971) == FALSE) && gv.GetBool(4969) == TRUE;
  },
  1410: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4969) == TRUE && gv.GetBool(4970) == FALSE) && gv.GetBool(4971) == FALSE;
  },
  1401: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4948) == TRUE && ((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE)) && gv.GetBool(4969) == FALSE;
  },
  1400: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4948) == TRUE && ((gv.GetBool(2508) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2506) == TRUE)) && gv.GetBool(4971) == FALSE;
  },
  1491: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6460) == TRUE && gv.GetBool(4947) == FALSE) && (gv.GetBool(4944) == TRUE || gv.GetBool(6296) == TRUE);
  },
  1382: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4946) == TRUE && gv.GetBool(4944) == TRUE;
  },
  1356: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4414) == TRUE && gv.GetBool(6296) == FALSE;
  },
  1354: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3916) == FALSE && gv.GetBool(4944) == FALSE) && gv.GetBool(4414) == FALSE || gv.GetBool(6296) == TRUE && gv.GetBool(4947) == FALSE) && gv.GetBool(4944) == FALSE;
  },
  1353: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3916) == FALSE && gv.GetBool(4944) == FALSE) && gv.GetBool(4414) == FALSE || gv.GetBool(6296) == TRUE && gv.GetBool(4947) == FALSE;
  },
  1404: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4388) == TRUE && gv.GetBool(4393) == FALSE) && gv.GetBool(4832) == FALSE;
  },
  1403: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4388) == TRUE && gv.GetBool(4393) == FALSE;
  },
  1654: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(23) == 3;
  },
  1389: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4776) == TRUE || gv.GetBool(4765) == TRUE) && gv.GetBool(6351) == FALSE;
  },
  1147: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4776) == TRUE || gv.GetBool(4765) == TRUE;
  },
  1086: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4765) == FALSE && gv.GetBool(4776) == FALSE) && (((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE) || gv.GetBool(2509) == TRUE);
  },
  952: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(23) >= 2;
  },
  951: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(25) >= 2;
  },
  950: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(24) >= 2;
  },
  1490: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6459) == TRUE && gv.GetBool(4913) == FALSE) && gv.GetBool(4731) == TRUE;
  },
  1365: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4733) == TRUE && gv.GetBool(4829) == TRUE) && gv.GetBool(4830) == FALSE;
  },
  1364: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4731) == TRUE && gv.GetBool(4829) == TRUE) && gv.GetBool(4733) == FALSE;
  },
  1363: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4731) == FALSE;
  },
  1362: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4731) == FALSE || gv.GetBool(4829) == TRUE && (gv.GetBool(4733) == FALSE || gv.GetBool(4830) == FALSE);
  },
  899: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4388) == TRUE && gv.GetBool(4679) == FALSE;
  },
  838: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4388) == TRUE && gv.GetBool(4392) == FALSE) && gv.GetBool(4393) == FALSE;
  },
  837: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE) && gv.GetBool(2508) == TRUE) && gv.GetBool(2509) == TRUE) && gv.GetBool(4388) == FALSE;
  },
  503: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2453) == TRUE && gv.GetBool(3154) == TRUE;
  },
  501: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == TRUE && gv.GetBool(2458) == FALSE;
  },
  500: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2507) == TRUE && gv.GetBool(2457) == FALSE;
  },
  499: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2506) == TRUE && gv.GetBool(2456) == FALSE;
  },
  444: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2506);
  },
  529: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2198) == TRUE || gv.GetBool(2202) == TRUE;
  },
  182: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2196) == TRUE && gv.GetBool(2197) == FALSE;
  },
  173: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2087) == TRUE && gv.GetBool(2088) == FALSE;
  },
  512: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2008) == TRUE && gv.GetBool(2009) == FALSE;
  },
  508: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(1987) == TRUE && gv.GetBool(1992) == FALSE) && gv.GetBool(2018) == FALSE;
  },
  347: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(1987) == TRUE && gv.GetBool(2015) == FALSE) && gv.GetBool(1992) == FALSE;
  },
  172: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1978) == TRUE && gv.GetBool(1980) == FALSE;
  },
  166: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1952) == TRUE && gv.GetBool(1966) == FALSE;
  },
  505: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1942) == TRUE || gv.GetBool(2001) == TRUE;
  },
  164: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1942) == TRUE && gv.GetBool(2025) == FALSE;
  },
  526: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(1969) == TRUE || gv.GetBool(1967) == TRUE) || gv.GetBool(3179) == TRUE;
  },
  511: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(2780) == TRUE || gv.GetBool(2005) == TRUE) || ((gv.GetBool(2506) && ((gv.GetBool(2507) || gv.GetBool(2508)) || gv.GetBool(2509)) || gv.GetBool(2507) && (gv.GetBool(2508) || gv.GetBool(2509))) || gv.GetBool(2508) && gv.GetBool(2509));
  },
  510: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1970) == TRUE || gv.GetBool(2002) == TRUE;
  },
  509: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2017) == TRUE && gv.GetBool(2018) == FALSE || gv.GetBool(2012) == TRUE && gv.GetBool(2009) == FALSE;
  },
  507: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2006) == TRUE && gv.GetBool(3184) == FALSE || gv.GetBool(2017) == TRUE && gv.GetBool(3183) == FALSE;
  },
  506: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2780) == TRUE && ((gv.GetBool(2506) && ((gv.GetBool(2507) || gv.GetBool(2508)) || gv.GetBool(2509)) || gv.GetBool(2507) && (gv.GetBool(2508) || gv.GetBool(2509))) || gv.GetBool(2508) && gv.GetBool(2509));
  },
  348: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1982) == TRUE && gv.GetBool(2775) == FALSE;
  },
  222: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1982) == TRUE && gv.GetBool(2452) == FALSE;
  },
  1644: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(12) == Argument;
  },
  1643: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4005) == TRUE && gv.GetBool(3987) == FALSE;
  },
  1483: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6458) == TRUE && gv.GetBool(3906) == FALSE) && gv.GetBool(3901) == TRUE;
  },
  1257: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3906) == TRUE && gv.GetBool(4022) == TRUE;
  },
  1234: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3990) == TRUE && gv.GetBool(3906) == TRUE;
  },
  1233: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3989) == TRUE && gv.GetBool(3906) == TRUE;
  },
  1232: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3906) == TRUE && gv.GetBool(3988) == TRUE) && gv.GetBool(3989) == FALSE;
  },
  804: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3988) == TRUE && gv.GetBool(3906) == TRUE;
  },
  803: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3985) == TRUE && gv.GetBool(3906) == FALSE;
  },
  802: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3991) == TRUE && gv.GetBool(3985) == FALSE) && gv.GetBool(7068) == TRUE;
  },
  677: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(12) >= Argument;
  },
  1733: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3894) == TRUE && gv.GetBool(3895) == FALSE;
  },
  1715: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 6 && gv.GetBool(3899) == FALSE;
  },
  1714: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 7 && gv.GetBool(3899) == FALSE;
  },
  1484: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6457) == TRUE && gv.GetBool(4022) == FALSE) && gv.GetBool(3889) == TRUE;
  },
  1276: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3889) == TRUE && gv.GetBool(3899) == FALSE;
  },
  796: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3895) == TRUE && gv.GetBool(3896) == FALSE;
  },
  1485: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6455) == TRUE && gv.GetBool(3879) == FALSE) && gv.GetBool(5317) == TRUE;
  },
  1227: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(39) >= 20;
  },
  1131: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4398) == TRUE && gv.GetBool(5328) == FALSE) && gv.GetBool(5317) == FALSE) && gv.GetBool(3878) == FALSE;
  },
  1130: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4398) == TRUE && gv.GetBool(5328) == TRUE) && gv.GetBool(5317) == FALSE) && gv.GetBool(3878) == FALSE;
  },
  1129: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4398) == TRUE && gv.GetBool(5328) == FALSE) && gv.GetBool(3878) == FALSE;
  },
  1127: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5317) == TRUE && gv.GetBool(6346) == FALSE) && gv.GetInt(39) < 20;
  },
  1126: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((((((((((((((((((((((Argument == 1 && gv.GetBool(5390) == TRUE || Argument == 2 && gv.GetBool(5391) == TRUE) || Argument == 3 && gv.GetBool(5392) == TRUE) || Argument == 4 && gv.GetBool(5393) == TRUE) || Argument == 5 && gv.GetBool(5394) == TRUE) || Argument == 6 && gv.GetBool(5395) == TRUE) || Argument == 7 && gv.GetBool(5396) == TRUE) || Argument == 8 && gv.GetBool(5397) == TRUE) || Argument == 9 && gv.GetBool(5398) == TRUE) || Argument == 10 && gv.GetBool(5399) == TRUE) || Argument == 11 && gv.GetBool(5400) == TRUE) || Argument == 12 && gv.GetBool(5401) == TRUE) || Argument == 13 && gv.GetBool(5402) == TRUE) || Argument == 14 && gv.GetBool(5403) == TRUE) || Argument == 15 && gv.GetBool(5404) == TRUE) || Argument == 16 && gv.GetBool(5405) == TRUE) || Argument == 17 && gv.GetBool(5406) == TRUE) || Argument == 18 && gv.GetBool(5407) == TRUE) || Argument == 19 && gv.GetBool(5408) == TRUE) || Argument == 20 && gv.GetBool(5409) == TRUE) || Argument == 21 && gv.GetBool(6117) == TRUE) || Argument == 22 && gv.GetBool(6118) == TRUE) || Argument == 23 && gv.GetBool(6119) == TRUE) || Argument == 24 && gv.GetBool(6120) == TRUE) || Argument == 25 && gv.GetBool(6121) == TRUE;
  },
  1565: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3878) == TRUE && gv.GetBool(4035) == FALSE) && gv.GetBool(5317) == FALSE;
  },
  1486: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6456) == TRUE && gv.GetBool(3882) == FALSE) && gv.GetBool(3876) == TRUE;
  },
  1649: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7091) == TRUE && gv.GetBool(4518) == FALSE;
  },
  1488: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6454) == TRUE && gv.GetBool(3968) == FALSE) && gv.GetBool(3869) == TRUE;
  },
  1025: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4520) == TRUE && gv.GetBool(4531) == FALSE;
  },
  1024: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4518) == TRUE && gv.GetBool(3870) == FALSE;
  },
  1023: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3870) == TRUE && gv.GetBool(3968) == FALSE;
  },
  805: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3721) == TRUE && gv.GetBool(4518) == FALSE) && gv.GetBool(3970) == TRUE) && (gv.GetBool(4413) == TRUE && gv.GetBool(4531) == TRUE || gv.GetBool(4520) == FALSE);
  },
  706: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3874) == TRUE && gv.GetBool(4122) == FALSE;
  },
  393: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2550) == TRUE && gv.GetBool(2481) == FALSE;
  },
  662: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3711) == TRUE && gv.GetBool(3909) == FALSE;
  },
  1059: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5318) == FALSE && gv.GetBool(3817) == TRUE) && gv.GetBool(3818) == TRUE) && gv.GetBool(4414) == FALSE;
  },
  1384: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == FALSE && gv.GetBool(5286) == TRUE;
  },
  1383: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5286) == TRUE && gv.GetBool(2507) == FALSE;
  },
  1409: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(6379) == FALSE && (gv.GetBool(3942) == TRUE || gv.GetBool(3941) == TRUE)) && gv.GetBool(4388) == FALSE) && (gv.GetBool(4414) == FALSE || gv.GetBool(3721) == TRUE);
  },
  1341: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(13) == 10101 && gv.GetBool(3214) == TRUE) && gv.GetBool(4117) == FALSE;
  },
  1594: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3920) == TRUE;
  },
  398: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2481) == TRUE && gv.GetBool(2861) == FALSE;
  },
  397: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == TRUE && gv.GetBool(2854) == FALSE;
  },
  396: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2506) == TRUE && gv.GetBool(2855) == FALSE;
  },
  395: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2509) == TRUE && gv.GetBool(2857) == FALSE;
  },
  394: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2507) == TRUE && gv.GetBool(2856) == FALSE;
  },
  392: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2102) == TRUE && gv.GetBool(2850) == FALSE;
  },
  346: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1981) == TRUE && gv.GetBool(2769) == FALSE;
  },
  345: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1966) == TRUE && gv.GetBool(2768) == FALSE;
  },
  344: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2025) == TRUE && gv.GetBool(2767) == FALSE;
  },
  323: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3162) == TRUE && gv.GetBool(2557) == FALSE;
  },
  322: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3161) == TRUE && gv.GetBool(2556) == FALSE;
  },
  321: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3160) == TRUE && gv.GetBool(2555) == FALSE;
  },
  320: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3163) == TRUE && gv.GetBool(2554) == FALSE;
  },
  266: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3162) == TRUE && gv.GetBool(2548) == FALSE;
  },
  265: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3161) == TRUE && gv.GetBool(2547) == FALSE;
  },
  264: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3160) == TRUE && gv.GetBool(2546) == FALSE;
  },
  263: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3163) == TRUE && gv.GetBool(2545) == FALSE;
  },
  2004: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4027) == TRUE && gv.GetBool(4029) == FALSE) && !((gv.GetBool(4417) || gv.GetBool(4413)) && gv.GetBool(3721) == FALSE);
  },
  1531: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4030) == TRUE && gv.GetBool(4031) == FALSE;
  },
  1482: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(6453) == TRUE && gv.GetBool(5853) == FALSE) && gv.GetBool(4027) == TRUE;
  },
  1337: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5853) == TRUE && gv.GetBool(4031) == TRUE;
  },
  1336: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5853) == FALSE;
  },
  1335: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5853) == TRUE && gv.GetBool(4030) == TRUE) && gv.GetBool(4031) == FALSE;
  },
  1297: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4028) == TRUE && gv.GetBool(4027) == TRUE;
  },
  799: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4504) == FALSE && gv.GetBool(4506) == TRUE) && (gv.GetBool(4029) == TRUE || gv.GetBool(4028) == TRUE);
  },
  798: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4503) == FALSE && (gv.GetBool(4023) == TRUE && gv.GetBool(4025) == TRUE || gv.GetBool(4023) == FALSE);
  },
  797: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6122) == TRUE || (gv.GetBool(4024) == TRUE && gv.GetBool(4025) == FALSE || gv.GetBool(4029) == TRUE && gv.GetBool(5853) == FALSE);
  },
  1632: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3941) == TRUE || gv.GetBool(3942) == TRUE;
  },
  1716: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(7203) == FALSE && (gv.GetBool(4417) || gv.GetBool(4413))) && gv.GetBool(3721) == FALSE;
  },
  1061: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4398) == TRUE;
  },
  1128: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5413) == TRUE;
  },
  1229: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4401) == TRUE && gv.GetBool(3941) == FALSE;
  },
  1345: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3707) == TRUE && gv.GetBool(4398) == FALSE || gv.GetBool(3722) == TRUE && gv.GetBool(3916) == FALSE) || gv.GetBool(3916) == TRUE && gv.GetBool(3948) == FALSE) || gv.GetBool(4388) == TRUE;
  },
  1369: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5242) == FALSE && (((gv.GetBool(3162) == TRUE && gv.GetBool(2557) == FALSE || gv.GetBool(3161) == TRUE && gv.GetBool(2556) == FALSE) || gv.GetBool(3160) == TRUE && gv.GetBool(2555) == FALSE) || gv.GetBool(3163) == TRUE && gv.GetBool(2554) == FALSE);
  },
  1368: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3941) == FALSE && gv.GetBool(3916) == TRUE) && gv.GetBool(4999) == TRUE;
  },
  1367: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3942) == FALSE && gv.GetBool(3721) == TRUE) && gv.GetBool(5000) == TRUE) && gv.GetBool(3021) == FALSE;
  },
  1366: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7030) == TRUE && gv.GetBool(6320) == FALSE;
  },
  784: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4417) || gv.GetBool(4413)) && gv.GetBool(3721) == FALSE;
  },
  795: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4004) == FALSE && gv.GetBool(4415) == FALSE) && gv.GetBool(4486) == FALSE;
  },
  792: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3942) == FALSE && gv.GetBool(3721) == TRUE) && gv.GetBool(5000) == FALSE) && gv.GetBool(3021) == FALSE;
  },
  793: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4486) == FALSE && (gv.GetBool(4411) == TRUE || gv.GetBool(4412) == TRUE)) && gv.GetBool(4414) == FALSE;
  },
  790: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3941) == FALSE && gv.GetBool(3916) == TRUE) && gv.GetBool(4999) == FALSE;
  },
  672: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(3948) == FALSE;
  },
  671: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(3948) == FALSE;
  },
  1002: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5024) == TRUE;
  },
  947: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4739) == TRUE;
  },
  1494: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6378) == FALSE && gv.GetBool(4081) == FALSE;
  },
  598: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2077) == TRUE && gv.GetBool(3580) == FALSE;
  },
  1265: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4639) == TRUE && gv.GetBool(5957) == FALSE;
  },
  1264: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4639) == FALSE && gv.GetBool(5957) == FALSE;
  },
  880: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2029) == TRUE && gv.GetBool(3493) == FALSE || gv.GetBool(3493) == TRUE && gv.GetBool(2030) == FALSE;
  },
  1616: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6986) == TRUE && gv.GetBool(6987) == FALSE;
  },
  1615: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6985) == TRUE && gv.GetBool(6986) == FALSE;
  },
  1614: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6984) == TRUE && gv.GetBool(6985) == FALSE;
  },
  1613: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6983) == TRUE && gv.GetBool(6984) == FALSE;
  },
  1612: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6983) == FALSE;
  },
  1611: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6976) == FALSE;
  },
  1610: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6979) == TRUE && gv.GetBool(6980) == FALSE;
  },
  1609: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6978) == TRUE && gv.GetBool(6979) == FALSE;
  },
  1608: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6977) == TRUE && gv.GetBool(6978) == FALSE;
  },
  1607: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6976) == TRUE && gv.GetBool(6977) == FALSE;
  },
  1605: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6979) == TRUE;
  },
  1604: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6978) == TRUE;
  },
  1603: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6977) == TRUE;
  },
  1602: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6976) == TRUE;
  },
  1701: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7171) == TRUE;
  },
  1700: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7170) == TRUE;
  },
  1699: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7169) == TRUE;
  },
  1698: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7168) == TRUE;
  },
  1697: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7167) == TRUE;
  },
  1696: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7166) == TRUE;
  },
  1695: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7165) == TRUE;
  },
  1694: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7164) == TRUE;
  },
  1693: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7163) == TRUE;
  },
  1692: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7162) == TRUE;
  },
  1691: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7161) == TRUE;
  },
  1690: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7160) == TRUE;
  },
  1689: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7159) == TRUE;
  },
  1688: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7158) == TRUE;
  },
  1687: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7171) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 1;
  },
  1686: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7170) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 36;
  },
  1685: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7169) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 18;
  },
  1684: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7168) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 36;
  },
  1683: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7167) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 1;
  },
  1682: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7166) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 18;
  },
  1681: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7165) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 36;
  },
  1680: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7164) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 1;
  },
  1679: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7163) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 1;
  },
  1678: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7162) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 18;
  },
  1677: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7161) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 18;
  },
  1676: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7160) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 18;
  },
  1675: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7159) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 1;
  },
  1674: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7158) == FALSE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 36;
  },
  1575: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6869) == FALSE;
  },
  1574: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6869) == TRUE;
  },
  1573: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6868) == FALSE;
  },
  1572: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6868) == TRUE;
  },
  1571: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6867) == TRUE;
  },
  1570: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6866) == TRUE;
  },
  1569: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6867) == FALSE;
  },
  1568: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6866) == FALSE;
  },
  1567: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6865) == TRUE;
  },
  1702: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') >= 25;
  },
  1673: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4103) == TRUE || gv.GetBool(6894) == TRUE && gv.GetBool(3916) == TRUE;
  },
  1672: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE;
  },
  1631: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE;
  },
  1547: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6598) == FALSE && gv.GetInt(94) >= 5;
  },
  1546: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6597) == FALSE && gv.GetInt(95) >= 5;
  },
  1545: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6596) == FALSE && gv.GetInt(92) >= 5;
  },
  1544: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6595) == FALSE && gv.GetInt(91) >= 5;
  },
  1543: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6593) == FALSE && gv.GetInt(90) >= 5;
  },
  1542: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6594) == FALSE && gv.GetInt(89) >= 5;
  },
  1541: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6599) == FALSE && gv.GetInt(88) >= 36;
  },
  1532: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4169) == FALSE && gv.GetBool(3960) == FALSE) && gv.GetBool(4281) == FALSE;
  },
  1564: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6372) == FALSE;
  },
  1563: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6371) == FALSE;
  },
  1562: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6370) == FALSE;
  },
  1552: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6373) == TRUE;
  },
  1551: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6374) == TRUE;
  },
  1540: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6792) == TRUE;
  },
  1539: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6791) == TRUE;
  },
  1538: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6790) == TRUE;
  },
  1537: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6789) == TRUE;
  },
  1536: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6788) == TRUE;
  },
  1535: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6787) == TRUE;
  },
  1526: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6565) == TRUE;
  },
  1525: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6564) == TRUE;
  },
  1524: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6563) == TRUE;
  },
  1523: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(6562) == TRUE;
  },
  1149: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4948) == TRUE && gv.GetBool(5451) == FALSE;
  },
  1148: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5450) == FALSE && gv.GetBool(4838) == TRUE;
  },
  1150: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4972) == TRUE || gv.GetBool(4973) == TRUE) && gv.GetBool(5452) == FALSE;
  },
  1154: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == TRUE && gv.GetBool(5462) == FALSE;
  },
  1153: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5461) == FALSE && gv.GetBool(2507) == TRUE;
  },
  1152: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(5460) == FALSE;
  },
  1151: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4398) == TRUE && gv.GetBool(5459) == FALSE) && gv.GetBool(3916) == FALSE;
  },
  1146: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5448) == FALSE && gv.GetBool(6351) == TRUE;
  },
  1145: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4829) == TRUE && gv.GetBool(4915) == TRUE) && gv.GetBool(5447) == FALSE;
  },
  1144: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4783) == TRUE && gv.GetBool(5446) == FALSE;
  },
  1143: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5071) == TRUE && gv.GetBool(5445) == FALSE;
  },
  1142: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4937) == TRUE && gv.GetBool(5444) == FALSE;
  },
  1141: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5443) == FALSE && gv.GetBool(4608) == TRUE;
  },
  1140: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5001) == TRUE && gv.GetBool(5442) == FALSE;
  },
  1139: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5441) == FALSE && gv.GetBool(4757) == TRUE;
  },
  1138: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5440) == FALSE && gv.GetBool(4682) == TRUE;
  },
  1135: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(5438) == FALSE;
  },
  1134: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4884) == FALSE && gv.GetBool(3916) == TRUE) && gv.GetBool(5437) == FALSE;
  },
  1133: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3916) == TRUE && gv.GetBool(5436) == FALSE;
  },
  1497: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5091) == TRUE;
  },
  1101: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(37) >= Argument;
  },
  1100: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(38) >= Argument;
  },
  1097: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5361) == TRUE && gv.GetBool(5366) == FALSE;
  },
  1088: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(5350) == FALSE && gv.GetBool(5361) == FALSE) && gv.GetBool(4637) == FALSE) && gv.GetInt(18) >= 3;
  },
  1087: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5241) == TRUE && gv.GetBool(5348) == FALSE;
  },
  1085: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5356) == TRUE && gv.GetInt(18) == Argument;
  },
  1084: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(18) == Argument;
  },
  1083: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(38) >= 4;
  },
  1082: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(37) >= 4;
  },
  1076: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5350) == TRUE && gv.GetBool(5349) == FALSE;
  },
  1744: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4596) == FALSE && gv.GetBool(4600) == FALSE;
  },
  1662: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7144) == FALSE && gv.GetBool(5241) == TRUE;
  },
  1661: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4594) == FALSE && gv.GetBool(7143) == TRUE;
  },
  1660: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4593) == FALSE && gv.GetBool(7143) == TRUE;
  },
  1659: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4592) == FALSE && gv.GetBool(7143) == TRUE;
  },
  1211: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5241) == TRUE && gv.GetBool(5623) == FALSE;
  },
  1210: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3163) == TRUE && gv.GetBool(5621) == FALSE;
  },
  1209: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3162) == TRUE && gv.GetBool(5620) == FALSE;
  },
  1208: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3161) == TRUE && gv.GetBool(5619) == FALSE;
  },
  1207: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3160) == TRUE && gv.GetBool(5618) == FALSE;
  },
  1206: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3215) == TRUE && gv.GetBool(5616) == FALSE;
  },
  1713: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7199) == TRUE;
  },
  1711: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7193) == TRUE;
  },
  1630: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3940) == TRUE && gv.GetBool(3214) == TRUE;
  },
  1629: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3940) == TRUE && gv.GetBool(3214) == FALSE) && gv.GetBool(3938) == TRUE) && gv.GetBool(4639) == TRUE;
  },
  1628: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3940) == TRUE && gv.GetBool(3214) == FALSE) && gv.GetBool(3938) == TRUE) && gv.GetBool(4639) == FALSE;
  },
  1627: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3939) == TRUE && gv.GetBool(3214) == FALSE) && gv.GetBool(3938) == TRUE) && gv.GetBool(4639) == FALSE;
  },
  1626: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3939) == TRUE && gv.GetBool(3214) == FALSE) && gv.GetBool(3938) == TRUE) && gv.GetBool(4639) == TRUE;
  },
  1625: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3939) == TRUE && gv.GetBool(3214) == TRUE;
  },
  1412: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4464) == TRUE && gv.GetBool(6383) == FALSE;
  },
  1411: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2509) == TRUE && gv.GetBool(6383) == FALSE;
  },
  1066: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5331) == TRUE && gv.GetBool(4104) == FALSE;
  },
  1042: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(13) == 90101 || gv.GetInt(13) == 110101) || gv.GetInt(13) == 80101) || gv.GetInt(13) == 10101 && gv.GetBool(3916) == TRUE;
  },
  833: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(2506) && gv.GetBool(4072) == FALSE || gv.GetBool(2507) && gv.GetBool(4073) == FALSE) || gv.GetBool(2508) && gv.GetBool(4074) == FALSE) || gv.GetBool(2509) == TRUE && gv.GetBool(4075) == FALSE;
  },
  791: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3214) == FALSE || (gv.GetBool(3214) == TRUE && gv.GetBool(4388) == TRUE) && gv.GetBool(4392) == FALSE;
  },
  901: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4388) == TRUE && gv.GetBool(4281) == TRUE) && gv.GetInt(17) <= 4;
  },
  916: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(4281) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(17) == 3) && gv.GetBool(4685) == TRUE) && gv.GetBool(4388) == FALSE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  908: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(4281) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(17) == 2) && gv.GetBool(4685) == TRUE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  907: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(4281) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(17) == 1) && gv.GetBool(4685) == TRUE) && ((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  906: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(4639) == FALSE && gv.GetBool(4388) == FALSE) && gv.GetInt(17) == 0) && (gv.GetInt(16) < 3 || gv.GetBool(4169) == FALSE)) && gv.GetBool(4685) == TRUE;
  },
  931: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4393) == TRUE && gv.GetBool(4281) == TRUE) && gv.GetInt(17) == 5) && gv.GetInt(13) == 120101;
  },
  922: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4281) == FALSE && gv.GetInt(17) == 2) && gv.GetBool(4685) == TRUE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  921: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4639) == TRUE && gv.GetInt(17) == 0) && gv.GetBool(4685) == TRUE;
  },
  920: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4281) == FALSE && gv.GetInt(17) == 1) && gv.GetBool(4685) == TRUE) && ((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  855: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3827) == TRUE && gv.GetBool(4537) == FALSE;
  },
  852: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(17) == 0 || gv.GetInt(17) == 1) || gv.GetInt(17) == 2;
  },
  851: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(17) == Argument;
  },
  848: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4281) == TRUE && gv.GetBool(4169) == TRUE;
  },
  839: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4576) == TRUE && gv.GetBool(4536) == TRUE) && gv.GetBool(4639) == FALSE;
  },
  831: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(1) == 2 || gv.GetInt(1) == 3;
  },
  810: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3941) && gv.GetBool(3942);
  },
  914: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3163) == TRUE && gv.GetBool(4523) == FALSE) && gv.GetBool(4388) == FALSE;
  },
  913: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3160) == TRUE && gv.GetBool(4522) == FALSE) && gv.GetBool(4388) == FALSE;
  },
  912: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3162) == TRUE && gv.GetBool(4521) == FALSE) && gv.GetBool(4388) == FALSE;
  },
  911: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(16) == 0 && gv.GetBool(4388) == FALSE;
  },
  918: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetInt(16) == 2 && gv.GetBool(4687) == TRUE) && gv.GetBool(4388) == FALSE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  917: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(16) == 1 && gv.GetBool(4687) == TRUE) && gv.GetBool(4388) == FALSE;
  },
  928: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4576) == TRUE && gv.GetBool(4282) == TRUE;
  },
  927: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4576) == TRUE && gv.GetBool(3961) == TRUE;
  },
  1213: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(15) >= 3 && gv.GetBool(3960) == TRUE || gv.GetInt(17) == 0 && gv.GetBool(4281) == TRUE;
  },
  1114: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4169) == FALSE && gv.GetBool(4393) == TRUE;
  },
  935: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(16) == 6;
  },
  934: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4393) == TRUE && gv.GetBool(4169) == TRUE) && gv.GetInt(16) == 5) && gv.GetInt(13) == 120101;
  },
  932: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4388) == TRUE && gv.GetBool(4169) == TRUE) && gv.GetInt(16) <= 4) && gv.GetInt(16) >= 2;
  },
  930: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4169) == TRUE && gv.GetInt(16) == 2) && gv.GetBool(3960) == TRUE) && (gv.GetInt(15) == 2 || gv.GetInt(15) == 3);
  },
  929: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4169) == TRUE && gv.GetInt(16) == 2) && gv.GetBool(4281) == TRUE) && (gv.GetInt(17) == 2 || gv.GetInt(17) == 3);
  },
  1212: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3960) == TRUE && gv.GetInt(15) >= 4;
  },
  1374: (bioWorld, Argument) => {
    return (bioWorld.GetLocalIntegerVariable(0, 'GetClass') == 3 || bioWorld.GetLocalIntegerVariable(0, 'GetClass') == 5) || bioWorld.GetLocalIntegerVariable(0, 'GetClass') == 6;
  },
  946: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(15) == 3 && gv.GetBool(3960) == FALSE;
  },
  945: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(4393) == TRUE && gv.GetBool(3960) == TRUE) && gv.GetInt(15) == 5) && gv.GetInt(13) == 120101;
  },
  944: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4388) == TRUE && gv.GetBool(3960) == TRUE) && gv.GetInt(15) <= 4;
  },
  943: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(3960) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(15) == 3) && gv.GetBool(4688) == TRUE) && gv.GetBool(4388) == FALSE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  942: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3960) == FALSE && gv.GetInt(15) == 2) && gv.GetBool(4688) == TRUE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  941: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(3960) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(15) == 2) && gv.GetBool(4688) == TRUE) && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  940: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3960) == FALSE && gv.GetInt(15) == 1) && gv.GetBool(4688) == TRUE) && ((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  939: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(3960) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(15) == 1) && gv.GetBool(4688) == TRUE) && ((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  938: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4639) == FALSE && gv.GetInt(15) == 0) && ((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  937: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((gv.GetBool(4639) == TRUE && gv.GetBool(4388) == FALSE) && gv.GetInt(15) == 0) && (gv.GetInt(16) < 3 || gv.GetBool(4169) == FALSE)) && ((gv.GetBool(2506) == TRUE || gv.GetBool(2507) == TRUE) || gv.GetBool(2508) == TRUE);
  },
  936: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(15) == 6;
  },
  933: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4388) == TRUE && gv.GetBool(3960) == TRUE) && gv.GetInt(15) <= 4;
  },
  850: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3961) == FALSE && gv.GetInt(16) < 3) && gv.GetInt(15) == 0;
  },
  847: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetInt(15) == 0 || gv.GetInt(15) == 1) || gv.GetInt(15) == 2;
  },
  846: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(15) == Argument;
  },
  808: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4534) == FALSE && gv.GetBool(3828) == TRUE;
  },
  806: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(4576) == TRUE && gv.GetBool(4525) == FALSE) && gv.GetBool(4639) == TRUE;
  },
  710: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2588) == TRUE;
  },
  709: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2325) == FALSE;
  },
  2012: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5335) == FALSE;
  },
  1601: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5543) == TRUE && gv.GetBool(5335) == TRUE;
  },
  1600: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5335) == TRUE && (gv.GetBool(3028) == TRUE || gv.GetBool(3029) == TRUE);
  },
  1078: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5335) == TRUE && gv.GetBool(5337) == FALSE) && gv.GetBool(5336) == FALSE;
  },
  1077: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5337) == TRUE && gv.GetBool(5335) == TRUE) && gv.GetBool(5336) == FALSE;
  },
  1074: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5334) == TRUE && gv.GetBool(5113) == TRUE) && gv.GetBool(5340) == FALSE;
  },
  1073: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5334) == TRUE && gv.GetBool(5112) == TRUE) && gv.GetBool(5113) == FALSE;
  },
  1072: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5334) == TRUE && gv.GetBool(5111) == TRUE) && gv.GetBool(5112) == FALSE;
  },
  1071: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(5334) == TRUE && gv.GetBool(5110) == TRUE) && gv.GetBool(5111) == FALSE;
  },
  1070: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5241) == TRUE && gv.GetBool(5338) == FALSE;
  },
  1069: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2509) == TRUE && gv.GetBool(5339) == FALSE;
  },
  1068: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5335) == TRUE && gv.GetBool(5337) == FALSE;
  },
  1599: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((((gv.GetInt(105) == 80000 || gv.GetInt(105) == 80100) || gv.GetInt(105) == 80101) && gv.GetBool(6931) == FALSE || ((gv.GetInt(105) == 100000 || gv.GetInt(105) == 100100) || gv.GetInt(105) == 100101) && gv.GetBool(6933) == FALSE) || ((gv.GetInt(105) == 110000 || gv.GetInt(105) == 110100) || gv.GetInt(105) == 110101) && gv.GetBool(6930) == FALSE) || ((gv.GetInt(105) == 120100 || gv.GetInt(105) == 120100) || gv.GetInt(105) == 120101)) || ((gv.GetInt(105) == 10000 || gv.GetInt(105) == 10100) || gv.GetInt(105) == 10101);
  },
  1189: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(45) == 80101;
  },
  1188: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(45) == 110101;
  },
  1187: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(45) == 10101;
  },
  830: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 120101;
  },
  829: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 9;
  },
  828: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 8;
  },
  827: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 90101;
  },
  826: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 80101;
  },
  825: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 100101;
  },
  824: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 110101;
  },
  823: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 70101;
  },
  822: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 10101;
  },
  821: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) < 10;
  },
  820: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) >= 10;
  },
  819: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 9;
  },
  818: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 8;
  },
  817: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 120101;
  },
  816: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 100101;
  },
  815: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 80101;
  },
  814: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 110101;
  },
  813: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 90101;
  },
  812: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 10101;
  },
  811: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 70101;
  },
  692: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) == 0;
  },
  536: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((gv.GetBool(3279) == TRUE || gv.GetBool(3280) == TRUE) || gv.GetBool(3281) == TRUE) || gv.GetBool(3282) == TRUE;
  },
  879: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3687) == TRUE;
  },
  1671: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2506) == FALSE && (gv.GetInt(105) < 140000 || gv.GetInt(105) >= 150000);
  },
  1226: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(57) >= 3;
  },
  981: (bioWorld, Argument) => {
    return TRUE;
  },
  1009: (bioWorld, Argument) => {
    return TRUE;
  },
  1008: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4104) == TRUE;
  },
  1007: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4103) == TRUE;
  },
  1004: (bioWorld, Argument) => {
    return TRUE;
  },
  1065: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4104) == FALSE && ((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE || gv.GetBool(2506) == TRUE && gv.GetBool(2508) == TRUE) || gv.GetBool(2507) == TRUE && gv.GetBool(2508) == TRUE);
  },
  1037: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3002) == TRUE && gv.GetBool(3112) == TRUE;
  },
  1036: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3001) == TRUE && gv.GetBool(3112) == TRUE;
  },
  1035: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4473) == TRUE;
  },
  1402: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2506) == FALSE;
  },
  1495: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetXPLevel') > 19;
  },
  836: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(13) != 2 && gv.GetBool(4103) == FALSE;
  },
  794: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2509) == TRUE && gv.GetBool(2507) == TRUE;
  },
  898: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(2506) == TRUE && gv.GetBool(2507) == TRUE) && gv.GetBool(2508) == TRUE) && gv.GetBool(2509) == TRUE) && gv.GetBool(4104) == TRUE) && gv.GetBool(4103) == FALSE;
  },
  755: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3163) == TRUE && gv.GetBool(4254) == FALSE;
  },
  699: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4104) == TRUE && gv.GetBool(2509) == FALSE;
  },
  675: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == TRUE && gv.GetBool(2507) == TRUE;
  },
  638: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == FALSE && gv.GetBool(2506) == TRUE;
  },
  637: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2508) == TRUE && gv.GetBool(2506) == TRUE;
  },
  244: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((Argument == 0 || Argument == 1 && (((gv.GetBool(2506) || gv.GetBool(2507)) || gv.GetBool(2508)) || gv.GetBool(2509))) || Argument == 2 && ((gv.GetBool(2506) && ((gv.GetBool(2507) || gv.GetBool(2508)) || gv.GetBool(2509)) || gv.GetBool(2507) && (gv.GetBool(2508) || gv.GetBool(2509))) || gv.GetBool(2508) && gv.GetBool(2509))) || Argument == 3 && ((((gv.GetBool(2506) && gv.GetBool(2507)) && gv.GetBool(2508) || (gv.GetBool(2506) && gv.GetBool(2507)) && gv.GetBool(2509)) || (gv.GetBool(2506) && gv.GetBool(2508)) && gv.GetBool(2509)) || (gv.GetBool(2507) && gv.GetBool(2508)) && gv.GetBool(2509))) || (((Argument == 4 && gv.GetBool(2506)) && gv.GetBool(2507)) && gv.GetBool(2508)) && gv.GetBool(2509);
  },
  1853: (bioWorld, Argument) => {
    return FALSE;
  },
  1530: (bioWorld, Argument) => {
    return FALSE;
  },
  1157: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5463) == TRUE;
  },
  856: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4611) == TRUE;
  },
  138: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1889) == FALSE || gv.GetBool(1892) == TRUE;
  },
  115: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1772) == TRUE && gv.GetBool(1765) == TRUE;
  },
  113: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1764) == TRUE && gv.GetBool(1772) == TRUE;
  },
  834: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4566) == FALSE;
  },
  809: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4566) == TRUE;
  },
  561: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3412) == TRUE && gv.GetBool(3413) == TRUE;
  },
  1032: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5233) == TRUE;
  },
  1019: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4095) == FALSE;
  },
  1018: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4095) == TRUE;
  },
  886: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4095) == TRUE && gv.GetBool(4096) == FALSE;
  },
  770: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(3203) == TRUE && gv.GetBool(3205) == TRUE) && gv.GetBool(3207) == TRUE;
  },
  482: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2674) == TRUE && gv.GetBool(3149) == FALSE;
  },
  419: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2952) == TRUE && gv.GetBool(2953) == FALSE;
  },
  1852: (bioWorld, Argument) => {
    return FALSE;
  },
  1851: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7529) == FALSE;
  },
  1850: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7532) == TRUE && gv.GetBool(7533) == TRUE;
  },
  1849: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7529) == TRUE && gv.GetBool(7531) == TRUE;
  },
  1844: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7452) == TRUE && gv.GetBool(7448) == FALSE;
  },
  1843: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7448) == TRUE && gv.GetBool(7453) == FALSE;
  },
  1842: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (gv.GetBool(7448) == FALSE && gv.GetBool(7450) == FALSE) && gv.GetBool(7451) == FALSE;
  },
  1841: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7453) == FALSE;
  },
  1840: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7452) == FALSE;
  },
  1838: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7451) == TRUE;
  },
  1837: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7450) == TRUE;
  },
  1836: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7449) == TRUE;
  },
  1835: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7448) == TRUE;
  },
  1642: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7044) == TRUE && gv.GetBool(7045) == FALSE;
  },
  1641: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7045) == TRUE && gv.GetBool(7046) == TRUE;
  },
  1640: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7043) == TRUE && gv.GetBool(7044) == TRUE;
  },
  1760: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7308) == TRUE && gv.GetBool(7312) == FALSE;
  },
  1757: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7312) == TRUE && gv.GetBool(7313) == TRUE;
  },
  1752: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(7307) == TRUE && gv.GetBool(7308) == TRUE;
  },
  1113: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5372) == TRUE && gv.GetBool(5373) == TRUE;
  },
  1112: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(5374) == TRUE && gv.GetBool(5375) == TRUE;
  },
  779: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4364) == TRUE && gv.GetBool(4369) == FALSE;
  },
  739: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4176) == TRUE && gv.GetBool(4177) == TRUE;
  },
  738: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4170) == TRUE && gv.GetBool(4175) == TRUE;
  },
  693: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4056) == TRUE && gv.GetBool(4057) == TRUE;
  },
  691: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4054) == TRUE && gv.GetBool(4055) == TRUE;
  },
  582: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3471) == TRUE && gv.GetBool(3476) == FALSE;
  },
  581: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3472) == TRUE && gv.GetBool(3476) == FALSE;
  },
  580: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3476) == TRUE && gv.GetBool(3475) == FALSE;
  },
  579: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3476) == TRUE;
  },
  578: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3475) == TRUE;
  },
  577: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3472) == TRUE;
  },
  576: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3471) == TRUE;
  },
  573: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3463) == TRUE;
  },
  342: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2764) == TRUE;
  },
  338: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2759) == TRUE;
  },
  337: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2758) == TRUE;
  },
  332: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2755) == TRUE;
  },
  318: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2669) == TRUE;
  },
  317: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2667) == FALSE && gv.GetBool(2668) == TRUE;
  },
  316: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2668) == TRUE;
  },
  315: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2666) == TRUE;
  },
  314: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2667) == TRUE;
  },
  309: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2659) == FALSE;
  },
  308: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2659) == TRUE;
  },
  307: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2658) == FALSE;
  },
  306: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2658) == TRUE;
  },
  305: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2657) == FALSE;
  },
  304: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2657) == TRUE;
  },
  303: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2656) == FALSE;
  },
  302: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2656) == TRUE;
  },
  301: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2655) == TRUE;
  },
  312: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2640) == FALSE && gv.GetBool(2642) == TRUE;
  },
  298: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(2636) == FALSE && gv.GetBool(2633) == TRUE;
  },
  136: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1906) == TRUE;
  },
  135: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1906) == TRUE;
  },
  139: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(1840) == TRUE;
  },
  1549: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(47) >= 275;
  },
  1548: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(46) >= 275;
  },
  704: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4121) == TRUE;
  },
  948: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(3939) == FALSE && gv.GetBool(3940) == FALSE) && gv.GetBool(3941) == FALSE) && gv.GetBool(3942) == FALSE) && gv.GetBool(3943) == FALSE) && gv.GetBool(3944) == FALSE;
  },
  1332: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(69) == Argument;
  },
  1331: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(68) == Argument;
  },
  1330: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 6;
  },
  1329: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 5;
  },
  1328: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 4;
  },
  1327: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 3;
  },
  1326: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 2;
  },
  1325: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 1;
  },
  1324: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(67) == 0;
  },
  1169: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3822) == TRUE && Argument == 0;
  },
  1168: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3820) == TRUE && !(Argument != 0 && gv.GetBool(3822) == FALSE || Argument == 0 && gv.GetBool(3822) == TRUE);
  },
  1167: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3819) == TRUE && !((Argument != 0 && gv.GetBool(3822) == FALSE) && gv.GetBool(3820) == FALSE || Argument == 0 && (gv.GetBool(3822) == TRUE || gv.GetBool(3820) == TRUE));
  },
  1166: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3821) == TRUE && !((Argument == 0 && gv.GetBool(3817) == FALSE) && gv.GetBool(3818) == FALSE || Argument != 0 && (gv.GetBool(3817) == TRUE || gv.GetBool(3818) == TRUE));
  },
  1165: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3818) == TRUE && !(Argument == 0 && gv.GetBool(3817) == FALSE || Argument != 0 && gv.GetBool(3817) == TRUE);
  },
  1164: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3817) == TRUE && Argument != 0;
  },
  1163: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3822) == TRUE && Argument != 0;
  },
  1162: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3820) == TRUE && (Argument != 0 && gv.GetBool(3822) == FALSE || Argument == 0 && gv.GetBool(3822) == TRUE);
  },
  1161: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3821) == TRUE && ((Argument == 0 && gv.GetBool(3817) == FALSE) && gv.GetBool(3818) == FALSE || Argument != 0 && (gv.GetBool(3817) == TRUE || gv.GetBool(3818) == TRUE));
  },
  1160: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3819) == TRUE && ((Argument != 0 && gv.GetBool(3822) == FALSE) && gv.GetBool(3820) == FALSE || Argument == 0 && (gv.GetBool(3822) == TRUE || gv.GetBool(3820) == TRUE));
  },
  1159: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3818) == TRUE && (Argument == 0 && gv.GetBool(3817) == FALSE || Argument != 0 && gv.GetBool(3817) == TRUE);
  },
  1158: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3817) == TRUE && Argument == 0;
  },
  670: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((((gv.GetBool(3939) == FALSE || gv.GetBool(3817)) && (gv.GetBool(3940) == FALSE || gv.GetBool(3818))) && (gv.GetBool(3943) == FALSE || gv.GetBool(3821))) && (gv.GetBool(3941) == FALSE || gv.GetBool(3819))) && (gv.GetBool(3942) == FALSE || gv.GetBool(3820))) && (gv.GetBool(3944) == FALSE || gv.GetBool(3822));
  },
  669: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return (((((Argument == 0 && gv.GetBool(3939)) && gv.GetBool(3817) == FALSE || (Argument == 1 && gv.GetBool(3940)) && gv.GetBool(3818) == FALSE) || (Argument == 2 && gv.GetBool(3943)) && gv.GetBool(3821) == FALSE) || (Argument == 3 && gv.GetBool(3941)) && gv.GetBool(3819) == FALSE) || (Argument == 4 && gv.GetBool(3942)) && gv.GetBool(3820) == FALSE) || (Argument == 5 && gv.GetBool(3944)) && gv.GetBool(3822) == FALSE;
  },
  651: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((gv.GetBool(3817) == TRUE || gv.GetBool(3818) == TRUE) || gv.GetBool(3819) == TRUE) || gv.GetBool(3820) == TRUE) || gv.GetBool(3821) == TRUE) || gv.GetBool(3822) == TRUE;
  },
  1668: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3369) == TRUE;
  },
  1667: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3372) == TRUE;
  },
  1666: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3371) == TRUE;
  },
  1665: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3370) == TRUE;
  },
  1664: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3368) == TRUE;
  },
  1060: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(36) == Argument;
  },
  698: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3367) == TRUE;
  },
  697: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3366) == TRUE;
  },
  696: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3364) == TRUE;
  },
  695: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3363) == TRUE;
  },
  694: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(3365) == TRUE;
  },
  1527: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetSalvage') >= Argument;
  },
  1534: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetSalvage') < Argument;
  },
  1291: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(46) >= 300;
  },
  1290: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(47) >= 300;
  },
  1289: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(46) > gv.GetInt(47);
  },
  975: (bioWorld, Argument) => {
    return FALSE;
  },
  974: (bioWorld, Argument) => {
    return TRUE;
  },
  881: (bioWorld, Argument) => {
    return FALSE;
  },
  550: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(2, 'GetTalkToCount') == Argument;
  },
  481: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE && gv.GetBool(4639) == TRUE;
  },
  480: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE && gv.GetBool(4639) == FALSE;
  },
  418: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((((Argument == 0 && gv.GetBool(3939) || Argument == 1 && gv.GetBool(3940)) || Argument == 2 && gv.GetBool(3943)) || Argument == 3 && gv.GetBool(3941)) || Argument == 4 && gv.GetBool(3942)) || Argument == 5 && gv.GetBool(3944)) || Argument == 6 && gv.GetBool(4774)) || Argument == 7 && gv.GetBool(4775);
  },
  416: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return ((((((Argument == 0 && gv.GetBool(3817) == TRUE || Argument == 1 && gv.GetBool(3818) == TRUE) || Argument == 2 && gv.GetBool(3821) == TRUE) || Argument == 3 && gv.GetBool(3819) == TRUE) || Argument == 4 && gv.GetBool(3820) == TRUE) || Argument == 5 && gv.GetBool(3822) == TRUE) || Argument == 6 && gv.GetBool(4770) == TRUE) || Argument == 7 && gv.GetBool(4771) == TRUE;
  },
  415: (bioWorld, Argument) => {
    return bioWorld.GetLocalBoolVariable(4, 'InPlayerParty') == TRUE;
  },
  170: (bioWorld, Argument) => {
    return (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 1 && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 2 && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1)) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 3 && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2);
  },
  169: (bioWorld, Argument) => {
    return (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 1 && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 2 && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2)) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 3 && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1);
  },
  160: (bioWorld, Argument) => {
    return (((((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 1 && Argument == 1) && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 1 && Argument == 2) && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1)) || (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 2 && Argument == 3) && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1)) || (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 2 && Argument == 4) && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2)) || (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 3 && Argument == 5) && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1)) || (bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Notoritey') == 3 && Argument == 6) && ((bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 1 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 1 || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 2 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2) || bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Childhood') == 3 && bioWorld.GetLocalIntegerVariable(0, 'GetBackground_Military') == 2);
  },
  159: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= Argument;
  },
  158: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= Argument;
  },
  157: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetSpecialty') == Argument;
  },
  156: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetCredits') >= Argument;
  },
  155: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetClass') == Argument;
  },
  154: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(46) > Argument;
  },
  152: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(47) > Argument;
  },
  149: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(0, 'GetMarshalRank') > Argument;
  },
  148: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(2) == Argument;
  },
  146: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetInt(1) == Argument;
  },
  145: (bioWorld, Argument) => {
    return bioWorld.GetLocalIntegerVariable(4, 'GetTalkToCount') == Argument;
  },
  144: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4639) == TRUE;
  },
  143: (bioWorld, Argument) => {
    const gv = bioWorld.GetGlobalVariables();
    return gv.GetBool(4639) == FALSE;
  },
};