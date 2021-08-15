# mele-social-framework
Framework for nuanced social interactions for Mass Effect: Legendary Edition

## What is this?
Social Framework allows modders to more easily create complex social interactions across all 3 Mass Effect: Legendary Edition games. It aims to:
* Standardize the use of social- and identity-related logic
* Ensure the use of Conditionals to check for social- and identity-related logic (rather than Bools or Ints)
* Standardize the use of Conditionals, Ints, and Transitions across all 3 games
* Create more nuanced social interactions by tracking more social relationships and identities:
  * more social relationships
    * friendship
    * loyalty
    * rivalry
    * romantic interest
    * sexual interest
  * more gender identities
    * eventually I'd like to support multiple simultaneous gender identities
  * hereditary identities
    * (currently unimplemented; allow for interactions based on Human, Asari, Volus, etc.)  
  * professional identities
    * (currently unimplemented; allow for interactions based on Entertainer, Merchant, Soldier, etc.)

## Do you need this?
If you are a player modding your game, you only need this to support other mods. Without other mods, this mod does not change the game play in any way.

## API
All API references are for editing Dialogs and Sequences.

Conditionals, Ints, and Transitions should be the same across all 3 MELE games. This obviously means there will be a lot of unused material by default (i.e. you will obviously not encounter Javik in LE1 vanilla, but Social Framework will still inject tracking for Javiik into LE1 & LE2).

### Replacement regexes
To ensure Conditionals and Transitions are correctly converted to the Social Framework, dump the files (using ME3 tools) and search with these regexes:
```textmate
FIXME: These are not the final regexes.

nConditional.+(digits)

nConditionalFunc.+(digits)
  nConditionalParam

nStateTrans.+(digits)
  nStateTransitionParam
```

### Gender
```textmate
// Conditions
29911 ==> Shepard gender identity
          1: 'Female',
          2: 'Genderqueer',
          3: 'Male',
          4: 'Non-binary',
          5: 'Transgendered',


```

## NOTES:
For all games:
* Validate current relationship state on __event__ (prob. entering Normandy).
  ** Check for newly-installed relationship mods / bools (to manage mods mid-install).
* Replace all social dialog BOOL checks / CND checks w/ Social Framework CND checks.






## TEMP
For reference, see:
* LE2 plot info: https://docs.google.com/spreadsheets/d/1p3j2LSGKleZAxowNCc3hFas_8osXB4LOuWEh2ssTfEA/edit#gid=2008915493
* Plot Editor > LE2 > Startup_INT.pcc
** State Event 3433 (Tali romance ended poorly)
** > Int 272 (Tali relationship; set to "6")
** > Bool 3307 (Tali Romance Ended Poorly -> true)



```
*/     LE2     /*
//// Bool
(Search: attract flirt kiss love male relat romanc sex)
1528    ME1 Ash romance
1529    ME1 Kaidan romance
1530    ME1 Liara romance
1926    ME1 no romance
2511    light romance done
2628    Yeoman.flirt
2633    Yeoman.flirt
3160    Gianni romance
3161    Gianni no romance
3226    Male
3227    Female
3270    Jack romance ended poorly
3304    Miranda romance ended poorly
3307    Tali romance ended poorly
3310    Thane romance ended poorly
3340    Tali R3 reached flirt
3423    Garrus flirt enabled
3487    Miranda flirted
3472    Jacob romance ended poorly
3660    Garrus romance ended poorly
3799    Jacob romance ended mutual
3800    Jacob.no I love you
3887    Jacob sex put off
3892    Jacob had sex
3894    Jacob declared romance
3926    Tali play love scene
4769    Miranda bad boy kiss
5206    Thane had sex
5207    Garrus had sex
5208    Jack
5209    Miranda
5751    Mystic had faux romance
6033    Tali no sex
6034    Miranda no sex
6035    Jack no sex
6036    Garrus no sex
6037    Thane no sex
66      female player
6665    Miranda romance resolution
6666    Miranda romance active
6667    Miranda romance breakup
6668    Tali romance resolution
6669    Tali romance active
6670    Tali romance breakup
6671    Jack fling
6672    Jack romance resolution
6673    Jack romance active
6674    Jack romance breakup
6675    Thane romance resolution
6676    Thane romance active
6677    Thane romance breakup
6678    Jacob romance resolution
6679    Jacob romance active
6680    Jacob romance breakup
6681    Garrus romance resolution
6682    Garrus romance active
6683    Garrus romance breakup
6684    Morinth warning
6685    Samara romance
6923    Liara finale kissed her
6941    Liara goodnight kiss
7333    Play love scene

// 7103 ??? DLC_01_Test ME3 player romancing Ash
// 7148 ??? DLC_01_Test ME3 chose paragon romance final
// 7150 ??? DLC_01_Test ME3 player romancing ash
// 7160 ??? DLC_01_Test ME3 chose paragon romance initial
// 7364 DLC Genesis romance ashley
// 7365 DLC Genesis romance kaiden
// 7366 DLC Genesis romance liara
// 7374 DLC Genesis no romance

//// Int
(Search: relat romanc  --kiss love male sex--)
197     ME2 Global buddy/relationship (yeoman) Kelly?
213     ME2 Global buddy/relationship Jack
266     ME2 Global buddy/relationship Miranda
267     ME2 Global buddy/relationship Jacob
268     ME2 Global buddy/relationship Geth
270     ME2 Global buddy/relationship Garrus
271     ME2 Global buddy/relationship Thane
272     ME2 Global buddy/relationship Tali
273     ME2 Global buddy/relationship Mordin
274     ME2 Global buddy/relationship Grunt
275     ME2 Global buddy/relationship Mystic
616     Captain's Cabin romance present



//// Floats (none)
(Search:  --kiss love male relat romanc sex--)


//// Conditionals
??? Spec_choice_avail               1144
??? Spec_choice_avail               1145
??? Spec_choice_avail               1146
??? Spec_choice_avail               1148
??? Spec_choice_avail               1149
??? Spec_choice_avail               1152
??? Spec_choice_avail               1153
??? Spec_choice_avail               1154
??? Spec_choice_avail               1155
??? Spec_choice_avail               1157
??? Spec_choice_available           1143
Another_is_penultimate              803
Another_is_penultimate              804
Another_is_penultimate              805
Another_is_penultimate              806
Another_is_penultimate              807
Another_is_penultimate              894
bad_relationship_one_time           962
Cabin_streaming_Garrus              1633
Cabin_streaming_Jack                1632
Cabin_streaming_Jacob               1634
Cabin_streaming_Kelly               1629
Cabin_streaming_Miranda             1631
Cabin_streaming_Tali                1630
Cabin_streaming_Thane               1635
Check_Assassin_True                 101
Check_Assassin_True                 118
Check_Assassin_True                 204
Check_Assassin_True                 75
Check_Assassin_True                 88
Check_Can_Ask_About_Romance         1923
Check_Convict_True                  114
Check_Convict_True                  200
Check_Convict_True                  71
Check_Convict_True                  83
Check_Convict_True                  97
Check_Female_Romance_On             1521
Check_Garrus_True                   100
Check_Garrus_True                   117
Check_Garrus_True                   203
Check_Garrus_True                   74
Check_Garrus_True                   87
Check_Geth_True                     115
Check_Geth_True                     201
Check_Geth_True                     72
Check_Geth_True                     85
Check_Geth_True                     98
Check_Grunt_True                    104
Check_Grunt_True                    121
Check_Grunt_True                    207
Check_Grunt_True                    78
Check_Grunt_True                    91
Check_Leading_True                  113
Check_Leading_True                  199
Check_Leading_True                  70
Check_Leading_True                  82
Check_Leading_True                  96
Check_Liara_Should_Comment_Garrus   1870
Check_Liara_Should_Comment_Jack     1865
Check_Liara_Should_Comment_Jacob    1868
Check_Liara_Should_Comment_Miranda  1866
Check_Liara_Should_Comment_Tali     1867
Check_Liara_Should_Comment_Thane    1869
Check_Mystic_True                   105
Check_Mystic_True                   122
Check_Mystic_True                   208
Check_Mystic_True                   79
Check_Mystic_True                   92
Check_Professor_True                103
Check_Professor_True                120
Check_Professor_True                206
Check_Professor_True                77
Check_Professor_True                90
Check_Relationship_Stage            857
Check_Relationship_Stage            859
Check_Relationship_Stage            860
Check_Relationship_Stage            861
Check_Relationship_Stage            862
Check_Relationship_Stage            863
Check_Relationship_Stage            865
Check_Relationship_Stage            867
Check_Relationship_Stage            868
Check_Romance_Active                1142
Check_Romance_Active                886
Check_Romance_Active                887
Check_Romance_Active                888
Check_Sex_and_Still_Dating_Jacob    1641
Check_Tali_True                     102
Check_Tali_True                     119
Check_Tali_True                     205
Check_Tali_True                     76
Check_Tali_True                     89
Check_Thief_True                    116
Check_Thief_True                    202
Check_Thief_True                    73
Check_Thief_True                    86
Check_Thief_True                    99
Check_Veteran_True                  106
Check_Veteran_True                  123
Check_Veteran_True                  209
Check_Veteran_True                  80
Check_Veteran_True                  93
Check_Vixen_True                    112
Check_Vixen_True                    198
Check_Vixen_True                    69
Check_Vixen_True                    81
Check_Vixen_True                    95
Comment_on_Jacob_attraction         1798
Culmination_happened                1588
Culmination_happened                1589
Culmination_happened                1590
Culmination_happened                1591
Culmination_happened                1592
Culmination_happened                1593
Culmination_hasnt_happen            1594
Culmination_hasnt_happen            1595
Culmination_hasnt_happen            1596
Culmination_hasnt_happen            1597
Culmination_hasnt_happen            1598
Culmination_hasnt_happen            1599
FALSE                               52
Flirt_and_Female                    732
Flirt_sexual                        551
Flirty_Paragon                      986
Flirty_Renegade                     985
Good_friends_female                 1354
Good_friends_male                   1353
Had_evening_together                961
Had_flirty_evening_together         960
In_ME1_squad_and_male               1520
Is_penultimate                      808
Is_penultimate                      809
Is_penultimate                      810
Is_penultimate                      811
Is_penultimate                      812
Is_penultimate                      893
ME1_Ashley_male                     559
ME1_Kaidan_female                   558
Mystic_Ash_Romance_Dead             453
No_other_is_penultimate             1003
Picture_Ashley                      1325
Picture_flipped                     1324
Picture_Kaidan                      1517
Picture_Liara                       1518
Picture_on_desk                     1328
Player_chose_sex                    1408
Player_chose_sex                    1409
Player_chose_sex                    1410
Player_chose_sex                    1411
Player_chose_sex                    1412
Player_chose_sex                    1413
Player_is_female                    50
Player_is_male                      49
R4_with_Another_Girl                1018
Relation_friends_or_flirty          543
Relation_professional               542
Relationship_flirty                 544
Relationship_flirty_male            553
Relationship_friends_only           545
Relationship_just_started           547
Rom_Show_Ashley                     2019
Rom_Show_Kaiden                     2020
Rom_Show_Liara                      2018
Rom_Show_None                       2021
Romance_active                      720
Romance_active                      898
Romance_ended                       802
Romance_ended                       850
Romance_ended_nicely_true           685
Romance_ended_nicely_true           686
Romance_ended_nicely_true           698
Romance_ended_nicely_true           710
Romance_ended_nicely_true           900
Romance_ended_poorly_true           672
Romance_ended_poorly_true           684
Romance_ended_poorly_true           697
Romance_ended_poorly_true           709
Romance_ended_poorly_true           899
romance_not_ended                   959
Romance_over_combined               957
Romance_Show_Ashley                 2011
Romance_Show_Kaiden                 2012
Romance_Show_Liara                  2010
Romance_Show_None                   2013
Samara_Is_Present_At_Apartment      2045
Sex_Put_Off_But_Still_Penultimate   1642
Tali_doesnt_want_to_talk            1638
Talked_to_count                     64
Time_for_21                         1445
Time_for_22                         1446
Time_for_23                         1447
Time_for_24                         1448
Time_for_25                         1449
Time_for_26                         1450
Time_for_27                         1451
Time_for_28                         1452
Time_for_29                         1453
Time_for_30                         1454
Time_for_31                         1455
Time_for_32                         1456
Time_for_33                         1457
Time_for_34                         1458
Time_for_35                         1459
Time_for_36                         1460
Time_for_37                         1461
Time_for_38                         1462
Time_for_39                         1463
Time_for_40                         1464
Time_for_41                         1465
Time_for_42                         1466
Time_for_43                         1467
Time_for_44                         1468
Time_for_45                         1469
Time_for_46                         1470
Time_for_47                         1471
Time_for_48                         1472
Time_for_49                         1473
Time_for_50                         1474
Time_for_51                         1475
Time_for_52                         1476
Time_for_53                         1477
Time_for_54                         1478
Time_for_55                         1479
Time_for_56                         1480
Time_for_57                         1481
Time_for_58                         1482
Time_for_59                         1483
Time_for_60                         1484
Time_for_CR1                        159
Time_for_CR1_comment                965
Time_for_CR2                        160
Time_for_CR3                        161
Time_for_CR3_comment                964
Time_for_end_comment                1015
Time_for_end_comment                1030
Time_for_end_comment                683
Time_for_end_comment                695
Time_for_end_comment                707
Time_for_end_comment                718
Time_for_end_comment                748
Time_for_end_comment                758
Time_for_end_comment                768
Time_for_end_comment                777
Time_for_end_comment                800
Time_for_end_comment                958
Time_for_end_comment                963
Time_for_endgame_comment            1024
Time_for_flirty_ok                  1017
Time_for_Garrus_Active              1819
Time_for_Garrus_Breakup             1820
Time_for_Garrus_Resolution          1818
Time_for_intro                      563
Time_for_Jack_Active                1809
Time_for_Jack_Breakup               1810
Time_for_Jack_Fling                 1807
Time_for_Jack_Resolution_Sex        1808
Time_for_Jacob_Active               1816
Time_for_Jacob_Breakup              1817
Time_for_Jacob_Resolution_NoSex     1815
Time_for_Jacob_Resolution_Sex       1814
Time_for_Kelly_Date                 1823
Time_for_Miranda_Active             1802
Time_for_Miranda_Breakup            1803
Time_for_Miranda_Resolution_NoSex   1801
Time_for_Miranda_Resolution_Sex     1800
Time_for_Morinth_Warning            1821
Time_for_post_credit_culm           1582
Time_for_post_credit_culm           1583
Time_for_post_credit_culm           1584
Time_for_post_credit_culm           1585
Time_for_post_credit_culm           1586
Time_for_post_credit_culm           1587
Time_for_post_loyal                 561
Time_for_R1                         564
Time_for_R1                         675
Time_for_R1                         689
Time_for_R1                         701
Time_for_R1                         713
Time_for_R1                         742
Time_for_R1                         752
Time_for_R1                         762
Time_for_R1                         772
Time_for_R1                         794
Time_for_R2                         565
Time_for_R2                         676
Time_for_R2                         690
Time_for_R2                         702
Time_for_R2                         714
Time_for_R2                         743
Time_for_R2                         753
Time_for_R2                         763
Time_for_R2                         773
Time_for_R2                         795
Time_for_R3                         566
Time_for_R3                         677
Time_for_R3                         691
Time_for_R3                         703
Time_for_R3                         715
Time_for_R3                         744
Time_for_R3                         754
Time_for_R3                         764
Time_for_R3                         774
Time_for_R3                         796
Time_for_R4                         567
Time_for_R4                         678
Time_for_R4                         692
Time_for_R4                         704
Time_for_R4                         716
Time_for_R4                         745
Time_for_R4                         755
Time_for_R4                         765
Time_for_R4                         775
Time_for_R4                         797
Time_for_R5                         568
Time_for_R5                         679
Time_for_R5                         693
Time_for_R5                         705
Time_for_R5                         746
Time_for_R5                         766
Time_for_R5                         798
Time_for_Ratch_Quest                1007
Time_for_rifle_story                1655
Time_for_Samara_Romance             1822
Time_for_Tali_Active                1805
Time_for_Tali_Breakup               1806
Time_for_Tali_Resolution_Sex        1804
Time_for_Thane_Active               1812
Time_for_Thane_Breakup              1813
Time_for_Thane_Resolution           1811
TRUE                                51
Wants_to_meet_in_cabin              546


//// Transitions
```


