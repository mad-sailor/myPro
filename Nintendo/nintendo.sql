SET NAMES UTF8;
DROP DATABASE IF EXISTS nintendo;
CREATE DATABASE nintendo charset=utf8;
USE nintendo;
/*轮播表*/
CREATE TABLE index_carousel(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(64),
    thumb VARCHAR(64),
    href VARCHAR(32),
    title VARCHAR(32)
);
INSERT INTO index_carousel VALUES(null,"img/index/banner_kinopio.jpg","img/index/thumb_kinopio.jpg","#","Captain Kinopio");
INSERT INTO index_carousel VALUES(null,"img/index/banner_MarioTennisAce.jpg","img/index/thumb_MarioTennisAce.png","#","Mario Tennis Ace");
INSERT INTO index_carousel VALUES(null,"img/index/banner_pokemon.jpg","img/index/thumb_pokemon.png","#","Pokemon");
INSERT INTO index_carousel VALUES(null,"img/index/banner_splatoon.jpg","img/index/thumb_splatoon.png","#","Splatoon2");
INSERT INTO index_carousel VALUES(null,"img/index/banner_xenoblade2.jpg","img/index/thumb_xenoblade2.png","#","Xenoblade2");

/*panel表*/
CREATE TABLE panel_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(64)
);
INSERT INTO panel_pic VALUES(null,"img/index/panel_octopath.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_labo_three.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_wolfenstein.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_marioTennis.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_hollowKnight.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_goVaction.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_labo.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_minecraft.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_ns.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_wario.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_game.jpg");
INSERT INTO panel_pic VALUES(null,"img/index/panel_ssb.jpg");

/*游戏机表*/
CREATE TABLE platform(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(64),
    title VARCHAR(16),
    price VARCHAR(16),
    sup_price VARCHAR(16),
    href VARCHAR(32)
);
INSERT INTO platform VALUES(null,"img/index/hardware-switch.jpg","Nintendo Switch","$299.","99MSRP*","ns.html");
INSERT INTO platform VALUES(null,"img/index/hardware-3ds.jpg","Nintendo 3DS","$199.","99MSRP*","#");
INSERT INTO platform VALUES(null,"img/index/hardware-2ds.jpg","Nintendo 2DS","Starting at $79.","99MSRP*","#");

/*play mode表*/
CREATE TABLE playMode(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(64),
    mode VARCHAR(16),
    mode_en VARCHAR(16),
    title VARCHAR(32),
    title_sec VARCHAR(32),
    sub_title VARCHAR(128)
);
INSERT INTO playMode VALUES(null,"img/ns/playmode/tv.jpg","TV模式","TV Mode","透过电视的大画面","大家一起尽情享乐","透过连接电视画面，无论大人或小朋友都可一起游玩的游戏，集合朋友或开派对最合适不过。");
INSERT INTO playMode VALUES(null,"img/ns/playmode/table.jpg","桌上模式","Tabletop Mode","分享画面","缩短距离","将主机背面的支架拉出，即使在没有电视的地方，和朋友分享「Joy-Con™」和画面即可进行对战或协力游戏。");
INSERT INTO playMode VALUES(null,"img/ns/playmode/hh.jpg","手提模式","Handheld Mode","携带高画质的","大荧幕外出","将和电视画面一样的游戏体验带到手中，无论何时何地也可享受超越手提游戏机概念的游戏。");
/*软件表*/
CREATE TABLE soft_game(
    gid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(64),
    title VARCHAR(64),
    timer DATE,
    platform VARCHAR(24),
    players VARCHAR(32),
    genre VARCHAR(64),
    price FLOAT
);
INSERT INTO soft_game VALUES(null,"img/software/game/daemon.png","DAEMON X MACHINA","2019-12-31","Nintendo Switch","1 player","Action",null);
INSERT INTO soft_game VALUES(null,"img/software/game/yoshi.png","Yoshi for Nintendo Switch","2019-12-31","Nintendo Switch","2 players simultaneous","Action,Platformer",null);
INSERT INTO soft_game VALUES(null,"img/software/game/ssb.png","Super Smash Bros.Ultimate","2018-12-7","Nintendo Switch","up to 8 players","Action",null);
INSERT INTO soft_game VALUES(null,"img/software/game/marioparty.png","Super Mario Party","2018-10-5","Nintendo Switch","up to 4 players","Party",null);
INSERT INTO soft_game VALUES(null,"img/software/game/fifa19.png","FIFA 19","2018-9-28","Nintendo Switch","up to 4 players","Sports",null);
INSERT INTO soft_game VALUES(null,"img/software/game/overcooked2.png","Overcooked!2","2018-8-7","Nintendo Switch","up to 4 players","Strategy,Party",24.99);
INSERT INTO soft_game VALUES(null,"img/software/game/octopath.png","OCTOPATH TRAVELER","2018-7-13","Nintendo Switch","1 player","Role-Playing,Adventure",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/wolfii.png","Wolfenstein II:The New Colossus","2018-6-29","Nintendo Switch","1 player","First Person,Action",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/marioace.png","Mario Tennis Aces","2018-6-22","Nintendo Switch","up to 4 players","Sports",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/fortnite.png","Fortnite","2018-6-12","Nintendo Switch","To be determined","Action,Strategy,Other",0.00);
INSERT INTO soft_game VALUES(null,"img/software/game/hollowk.png","Hollow Knight","2018-6-12","Nintendo Switch","1 player","Action,Adventure",15.00);
INSERT INTO soft_game VALUES(null,"img/software/game/fallout.png","Fallout Shelter","2018-6-10","Nintendo Switch","1 player","Simulation,Role-Playing",0.00);
INSERT INTO soft_game VALUES(null,"img/software/game/hyrulew.png","Hyrule Waariors:Definitive Edition","2018-5-18","Nintendo Switch","2 players","Action,Adventure",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/donkeykong.png","Donkey Kong Country:Tropical Freeze","2018-5-4","Nintendo Switch","2 players","Platformer,Action",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/kirby.png","Kirby Star Allies","2018-4-16","Nintendo Switch","up to 4 players","Action,Platformer",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/splatoon2.png","Splatoon2-Starter Edition","2018-4-16","Nintendo Switch","up to 8 players","Action,First Person",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/bayonetta.png","Bayonetta","2018-2-16","Nintendo Switch","1 player","Action",29.99);
INSERT INTO soft_game VALUES(null,"img/software/game/bayonetta2.png","Bayonetta2","2018-2-16","Nintendo Switch","1 player","Action",49.99);
INSERT INTO soft_game VALUES(null,"img/software/game/dqbuild.png","Dragon Quest Builders","2018-2-9","Nintendo Switch","To be determined","Role-Playing,Action",49.99);
INSERT INTO soft_game VALUES(null,"img/software/game/xenoblade.png","Xenoblade Chronicles 2","2017-12-1","Nintendo Switch","1 player","Role-Playing",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/skyrim.png","The Elder Scrolls V:Skyrim","2017-11-17","Nintendo Switch","1 player","Role-Playing,Action",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/snipper.png","Snipperclips Plus","2017-11-10","Nintendo Switch","up to 4 players","Action,Puzzles",29.99);
INSERT INTO soft_game VALUES(null,"img/software/game/odyssey.png","Super Mario Odyssey","2017-10-27","Nintendo Switch","2 players","Action,Platformer",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/fewarrios.png","Fire Emblem Warriors","2017-10-20","Nintendo Switch","To be determined","Action,Role-Playing",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/fifa18.png","FIFA 18","2017-9-29","Nintendo Switch","up to 8 players","Sports",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/pokemonDX.png","Pokken Tournament DX","2017-9-22","Nintendo Switch","2 players","Fighting,Action",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mariorabbids.png","Mario+Rabbids Kingdom Battle","2017-8-29","Nintendo Switch","2 players","Adventure",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/flipwars.png","Flip Wars","2017-8-10","Nintendo Switch","up to 4 players","Puzzle,Strategy",9.99);
INSERT INTO soft_game VALUES(null,"img/software/game/arms.png","ARMS","2017-6-16","Nintendo Switch","2 players","Fighting,Action",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/ulstreet.png","Ultra Street Fighter II:The Final Challengers","2017-5-26","Nintendo Switch","2 players","Action,Fighting",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/minecraft.png","Minecraft:Nintendo Switch Edition","2017-5-11","Nintendo Switch","up to 8 players","Adventure,Action",29.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mk8.png","Mario Kart 8 Deluxe","2017-4-28","Nintendo Switch","up to 12 players","Racing,Multiplayer",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/isaac.png","The Binding of Isaac:Afterbirth+","2017-4-17","Nintendo Switch","up to 4 players","Action,Adventure",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/blaster.png","Blaster Master Zero","2017-4-9","Nintendo Switch","2 players","Action,Adventure",9.99);
INSERT INTO soft_game VALUES(null,"img/software/game/12_switch.png","1-2-Switch","2017-3-3","Nintendo Switch","2 players","Party,Action",49.99);
INSERT INTO soft_game VALUES(null,"img/software/game/justdance.png","Just Dance","2017-3-3","Nintendo Switch","up to 6 players","Music",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/shovelk.png","Shovel Knight:Specter of Torment","2017-3-3","Nintendo Switch","1 player","Action,Adventure",9.99);
INSERT INTO soft_game VALUES(null,"img/software/game/superbomber.png","Super Bomberman R","2017-3-3","Nintendo Switch","up to 8 players","Action,Party,Puzzles",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zelda.png","The Legend of Zelda:Breath of the Wild","2017-3-3","Nintendo Switch","1 player","Action,Adventure,RPG",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/dfz.png","DRAGON BALL FighterZ","2018-12-31","Nintendo Switch","up to 6 players","Fighting",null);
INSERT INTO soft_game VALUES(null,"img/software/game/ninja.png","Mark of the Ninja:Remastered","2018-9-28","Nintendo Switch","1 player","Action,Adventure",null);
INSERT INTO soft_game VALUES(null,"img/software/game/warframe.png","Warframe","2019-12-31","Nintendo Switch","up to 4 players","Action,Role-Playing",null);
INSERT INTO soft_game VALUES(null,"img/software/game/steep.png","Steep","2019-12-31","Nintendo Switch","To be determined","Sports",null);
INSERT INTO soft_game VALUES(null,"img/software/game/eevee.png","Pokemon:Let's Go,Eevee!","2018-11-16","Nintendo Switch","2 players","Adventure,Role-playing",null);
INSERT INTO soft_game VALUES(null,"img/software/game/pikachu.png","Pokemon:Let's Go,Pikachu!","2018-11-16","Nintendo Switch","2 players","Adventure,Role-playing",null);
INSERT INTO soft_game VALUES(null,"img/software/game/starlink.png","Starlink:Battle for Atlas","2018-10-16","Nintendo Switch","To be determined","Action,Adventure",null);
INSERT INTO soft_game VALUES(null,"img/software/game/megaman11.png","Mage Man 11","2018-10-2","Nintendo Switch","1 player","Action,Platformer",null);
INSERT INTO soft_game VALUES(null,"img/software/game/goldencountry.png","Xenoblade Chronicles 2:Torna~The Golden Country","2018-9-21","Nintendo Switch","1 player","Role-playing",null);
INSERT INTO soft_game VALUES(null,"img/software/game/darksouls.png","DARK SOULS™:REMASTERED","2018-9-28","Nintendo Switch","To be determined","Action,RPG",null);
INSERT INTO soft_game VALUES(null,"img/software/game/finalremix.png","The WOrld Ends with You:Final Remix","2018-10-12","Nintendo Switch","1 player","Adventure,Action,Rold-playing",null);
INSERT INTO soft_game VALUES(null,"img/software/game/travis.png","Travis Strikes Again:No More Heros","2018-12-31","Nintendo Switch","2 players","Action",null);

INSERT INTO soft_game VALUES(null,"img/software/game/mario100.png","Mario Party:The Top 100","2017-11-10","Nintendo 3DS","up to 4 players","Party",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/marioluigi.png","Mario & Luigi:Superstar Saga","2017-10-6","Nintendo 3DS","1 player","Action,Adventure,Role-Playing",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/pikmin.png","Hey!Pikmin","2017-7-28","Nintendo 3DS","1 player","Action,Puzzle",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mariosss.png","Mario Sports Superstars","2017-3-24","Nintendo 3DS","To be determined","Sports",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mariomaker.png","Super Mario Maker for 3DS","2016-12-2","Nintendo 3DS","1 player","Side-Scrolling",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mariosonic.png","Mario & Sonic at the Rio 2016","2016-3-18","Nintendo 3DS","up to 4 players","Sports",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/ssb3ds.png","Super Smash Bros","2014-10-3","Nintendo 3DS","up to 4 players","Action",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mariogolf.png","Mario Golf:World Tour","2014-3-2","Nintendo 3DS","To be determined","Sports,Golf",29.99);
INSERT INTO soft_game VALUES(null,"img/software/game/yoshiisland.png","Yoshi's New Island","2014-3-14","Nintendo 3DS","To be determined","Action,Adventure",19.99);
INSERT INTO soft_game VALUES(null,"img/software/game/marioisland.png","Mario Party:Island Tour","2013-12-22","Nintendo 3DS","up to 4 players","Party",19.99);
INSERT INTO soft_game VALUES(null,"img/software/game/smbu.png","New Super Mario Bros.U","2015-10-16","Wii U","up to 5 players","Adventure,Side-Scrolling",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/smmwiiu.png","Super Mario Maker","2015-9-11","Wii U","1 player","Side-Scrolling",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mp10wiiu.png","Mario Party 10","2015-3-20","Wii U","up to 5 players","Party",29.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mariopack.png","NES Remix Pack","2014-12-5","Wii U","2 players alternating","Action,Adventure",19.99);
INSERT INTO soft_game VALUES(null,"img/software/game/ssbwiiu.png","Super Smash Bros","2014-12-21","Wii U","up to 8 players","Action",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/mk8wiiu.png","Mario Kart 8","2014-3-30","Wii U","up to 8 players","Sports,Racing",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/detectivepi.png","Detective Pikachu","2018-3-23","Nintendo 3DS","1 player","Adventure",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/pokemonum.jpg","Pokemon Ultra Starter Pack","2017-11-17","Nintendo 3DS","up to 4 players","RPG,Adventure",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/moreus.jpg","Pokemon Ultra Sun Starter Pack","2017-11-17","Nintendo 3DS","up to 4 players","RPG,Adventure",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/pkusum.png","Pokemon Ultra Sun & Ultra Moon","2017-11-17","Nintendo 3DS","up to 4 players","RPG,Adcenture",79.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zelda99.png","The Legend of Zelda:Breath of the Wild-Special Edition","2017-3-3","Nintendo Switch","1 player","Adventure,Action,RPG",99.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zeldaalink3ds.png","The Legend of Zelda:A Link Between Worlds","2013-11-22","Nintendo 3DS","1 player","Action,Adventure",19.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zeldabowwiiu.png","The Legend of Zelda:Breath of the Wild","2017-3-3","Wii U","1 player","Action,Adventure,RPG",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zeldamask.png","The Legend of Zelda:Majora's Mask 3D","2015-2-13","Nintendo 3DS","1 player","Action,Adventure",39.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zeldaskyward.png","The Legend of Zelda:Skyward Sword","2016-9-1","Wii U","1 player","Action,Adventure",19.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zeldatwilight.png","The Legend of Zelda:Twilight Princess HD","2016-3-4","Wii U","1 player","Action,Adventure",59.99);
INSERT INTO soft_game VALUES(null,"img/software/game/zeldawindwiiu.png","The Legend of Zelda:The Wind Waker HD","2013-10-4","Wii U","1 player","Action,Adventure",19.99);

/*用户信息表*/
CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(32)
);