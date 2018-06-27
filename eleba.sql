/*
Navicat MySQL Data Transfer

Source Server         : WRF
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : eleba

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2018-06-13 12:05:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `addressinfo`
-- ----------------------------
DROP TABLE IF EXISTS `addressinfo`;
CREATE TABLE `addressinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addressinfo
-- ----------------------------
INSERT INTO `addressinfo` VALUES ('1', '1', '湖南省衡阳市南华大学红湘校区');
INSERT INTO `addressinfo` VALUES ('2', '1', '湖南省衡阳市南华大学雨母校区');
INSERT INTO `addressinfo` VALUES ('3', '1', '湖南省衡阳市华信教育公司');
INSERT INTO `addressinfo` VALUES ('4', '1', '南华大学');

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL DEFAULT '0',
  `shopid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shopid` (`shopid`),
  CONSTRAINT `shopid` FOREIGN KEY (`shopid`) REFERENCES `shopinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '1', '新品上市');
INSERT INTO `category` VALUES ('2', '1', '优惠套餐');
INSERT INTO `category` VALUES ('4', '1', '经典主食');
INSERT INTO `category` VALUES ('5', '1', '精选小吃');
INSERT INTO `category` VALUES ('6', '1', '鸡翅套餐');
INSERT INTO `category` VALUES ('7', '1', '缤纷饮品');
INSERT INTO `category` VALUES ('8', '1', '美味甜食');
INSERT INTO `category` VALUES ('9', '1', '麦趣鸡盒');
INSERT INTO `category` VALUES ('11', '1', '开心乐园套餐');
INSERT INTO `category` VALUES ('12', '2', '人气套餐');

-- ----------------------------
-- Table structure for `goodsinfo`
-- ----------------------------
DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `id` int(11) NOT NULL DEFAULT '0',
  `shopid` int(11) NOT NULL,
  `cateid` int(11) NOT NULL,
  `sales` int(11) DEFAULT NULL,
  `praiserate` int(11) DEFAULT '100',
  `name` varchar(20) NOT NULL,
  `price` float(11,2) DEFAULT '99.99',
  `summary` varchar(255) DEFAULT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cateid1` (`cateid`),
  KEY `shopid1` (`shopid`),
  CONSTRAINT `cateid1` FOREIGN KEY (`cateid`) REFERENCES `category` (`id`),
  CONSTRAINT `shopid1` FOREIGN KEY (`shopid`) REFERENCES `shopinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsinfo
-- ----------------------------
INSERT INTO `goodsinfo` VALUES ('0', '1', '1', '4', '60', '初夏乐套餐', '59.00', '大鸡块1份+麦辣鸡翅2对+大可乐', null);
INSERT INTO `goodsinfo` VALUES ('1', '1', '1', '3', '60', '法式针虾厚牛堡', '34.00', '法式珍虾牛堡一个', null);
INSERT INTO `goodsinfo` VALUES ('2', '1', '1', '1', '100', '法式苹果味奶茶', '15.00', '法式苹果味奶茶', null);
INSERT INTO `goodsinfo` VALUES ('3', '1', '1', '4', '100', '法式柠香鸡腿堡', '28.00', '法式柠香鸡腿堡1个', null);
INSERT INTO `goodsinfo` VALUES ('4', '1', '2', '14', '100', '薯条', '5.00', '一份薯条 原理土豆。', null);
INSERT INTO `goodsinfo` VALUES ('5', '1', '2', '5', '100', '麦辣鸡翅2块', '5.00', '麦辣鸡翅2块', null);
INSERT INTO `goodsinfo` VALUES ('6', '1', '4', '1', '100', '麦香鱼汉堡', '19.00', '原理：面板、鱼、芝士', null);
INSERT INTO `goodsinfo` VALUES ('7', '1', '4', '6', '70', '巨无霸汉堡', '23.00', '原料：面包、牛肉', null);
INSERT INTO `goodsinfo` VALUES ('8', '1', '4', '12', '100', '经典麦辣鸡腿汉堡', '20.00', '1个经典麦辣鸡腿汉堡 主要原料：面包、鸡肉、生菜、', null);
INSERT INTO `goodsinfo` VALUES ('9', '1', '5', '80', '90', '麦辣鸡翅2块（炸鸡翅）', '11.50', '2块麦辣鸡翅 主要原料：鸡肉，腌料，裹粉，油', null);
INSERT INTO `goodsinfo` VALUES ('10', '1', '5', '34', '80', '麦乐鸡5块（炸鸡块）\r\n', '11.50', '5块麦乐鸡主要原料：鸡肉，油', null);
INSERT INTO `goodsinfo` VALUES ('11', '1', '6', '29', '100', '麦辣鸡腿汉堡配麦辣鸡翅套餐', '33.00', ' ', null);
INSERT INTO `goodsinfo` VALUES ('12', '1', '6', '13', '70', '巨无霸汉堡配麦辣鸡翅套餐', '34.00', ' ', null);
INSERT INTO `goodsinfo` VALUES ('13', '1', '7', '12', '100', '大可乐', '11.50', ' ', null);
INSERT INTO `goodsinfo` VALUES ('14', '1', '7', '1', '100', '鲜煮咖啡（大）', '15.00', '鲜煮咖啡（大）', null);
INSERT INTO `goodsinfo` VALUES ('15', '1', '7', '5', '100', '大雪碧', '11.50', ' ', null);
INSERT INTO `goodsinfo` VALUES ('16', '1', '8', '10', '70', '派（香芋）', '7.50', '香芋派 主要原料：香芋派', null);
INSERT INTO `goodsinfo` VALUES ('17', '1', '8', '13', '100', '派（菠萝）', '7.50', '菠萝派 主要原料：菠萝派', null);
INSERT INTO `goodsinfo` VALUES ('18', '1', '9', '1', '100', '麦趣鸡盒(那么大鸡排+麦辣鸡翅)', '92.00', '麦趣鸡盒(那么大鸡排+麦辣鸡翅)', null);
INSERT INTO `goodsinfo` VALUES ('19', '1', '11', '5', '80', '汉堡开心乐园餐（小薯条）', '50.00', '汉堡开心乐园餐（小薯条）', null);
INSERT INTO `goodsinfo` VALUES ('20', '2', '12', '48', '99', '巴西烤肉+奥尔良腿排+美味小菜', '20.00', '此单品可参与满16减6，满20减8，满40减16活动', null);

-- ----------------------------
-- Table structure for `ordergoods`
-- ----------------------------
DROP TABLE IF EXISTS `ordergoods`;
CREATE TABLE `ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderid` int(11) NOT NULL,
  `goodsid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderid3` (`orderid`),
  KEY `goodsid3` (`goodsid`),
  CONSTRAINT `goodsid3` FOREIGN KEY (`goodsid`) REFERENCES `goodsinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ordergoods
-- ----------------------------
INSERT INTO `ordergoods` VALUES ('1', '2', '18', '1');
INSERT INTO `ordergoods` VALUES ('2', '2', '16', '1');
INSERT INTO `ordergoods` VALUES ('3', '1', '11', '2');
INSERT INTO `ordergoods` VALUES ('4', '3', '4', '2');
INSERT INTO `ordergoods` VALUES ('5', '4', '1', '3');
INSERT INTO `ordergoods` VALUES ('6', '4', '2', '3');
INSERT INTO `ordergoods` VALUES ('7', '5', '0', '1');
INSERT INTO `ordergoods` VALUES ('8', '5', '13', '1');
INSERT INTO `ordergoods` VALUES ('9', '5', '8', '1');
INSERT INTO `ordergoods` VALUES ('11', '9', '16', '8');
INSERT INTO `ordergoods` VALUES ('12', '6', '20', '1');

-- ----------------------------
-- Table structure for `orderinfo`
-- ----------------------------
DROP TABLE IF EXISTS `orderinfo`;
CREATE TABLE `orderinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `shopid` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `userid2` (`userid`),
  KEY `shopid2` (`shopid`),
  CONSTRAINT `shopid2` FOREIGN KEY (`shopid`) REFERENCES `shopinfo` (`id`),
  CONSTRAINT `userid2` FOREIGN KEY (`userid`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderinfo
-- ----------------------------
INSERT INTO `orderinfo` VALUES ('1', '1', '1', '2018-06-01 12:47:27', '2');
INSERT INTO `orderinfo` VALUES ('2', '1', '1', '2018-05-26 12:10:02', '2');
INSERT INTO `orderinfo` VALUES ('3', '1', '1', '2018-06-01 17:48:06', '2');
INSERT INTO `orderinfo` VALUES ('4', '1', '1', '2018-06-03 17:36:52', '2');
INSERT INTO `orderinfo` VALUES ('5', '1', '1', '2018-06-04 11:49:54', '2');
INSERT INTO `orderinfo` VALUES ('6', '1', '2', '2018-06-04 19:50:18', '1');

-- ----------------------------
-- Table structure for `shopinfo`
-- ----------------------------
DROP TABLE IF EXISTS `shopinfo`;
CREATE TABLE `shopinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `grade` float(5,1) DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  `startprice` float(11,2) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `typeid` int(11) DEFAULT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `typeid` (`typeid`),
  CONSTRAINT `typeid` FOREIGN KEY (`typeid`) REFERENCES `shoptype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopinfo
-- ----------------------------
INSERT INTO `shopinfo` VALUES ('1', '麦当劳', '5.0', '287', '0.00', '35', '欢迎光临，请错开高峰期下单。', '1', 'https://fuss10.elemecdn.com/8/62/84026ade6c5e73ad44f01b8cefdacpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/');
INSERT INTO `shopinfo` VALUES ('2', '老板不在', '4.1', '2060', '5.00', '38', '各位小主，本店方便快捷，口味丰富。', '2', 'https://fuss10.elemecdn.com/5/d4/8a35c9deb650799687783467d698fjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/');
INSERT INTO `shopinfo` VALUES ('3', '大丰源美食', '4.4', '2298', '10.00', '38', '本店宗旨原料新鲜，卫生！', '1', 'https://fuss10.elemecdn.com/2/ee/80d154a384adaca3fc8213eb54f68jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/');
INSERT INTO `shopinfo` VALUES ('4', '德克士汉堡炸鸡', '4.4', '1844', '10.00', '38', '欢迎光临，请错开高峰期下单。', '1', 'https://fuss10.elemecdn.com/d/24/0f5debb9cf74dd8b46b8fee1e9019jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/');
INSERT INTO `shopinfo` VALUES ('5', '厦门冬粉鸭', '4.7', '3149', '10.00', '36', '同学们，好吃不贵，经济实惠', '1', 'https://fuss10.elemecdn.com/8/2e/2a0b89296fa5ae1e6a1918546db05jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/');
INSERT INTO `shopinfo` VALUES ('6', '重庆酸辣粉', '5.0', '1741', '7.00', '37', '不送上楼，预订单不能准时到', '1', null);
INSERT INTO `shopinfo` VALUES ('7', '杭州小笼包', '4.8', '4140', '8.00', '36', '本店营业时间7：45-21：00', '1', null);
INSERT INTO `shopinfo` VALUES ('8', '张记香港茶点', '5.0', '170', '20.00', '26', '老香港茶点', '1', null);
INSERT INTO `shopinfo` VALUES ('10', '鲜目录寿司', '4.9', '112', '100.00', '20', '欢迎光临，请错开高峰期下单。', '1', null);
INSERT INTO `shopinfo` VALUES ('11', '港式卤肉饭', '4.8', '1868', '0.00', '35', '本店推荐你在饿了吧上点餐', '2', null);
INSERT INTO `shopinfo` VALUES ('12', '北京皮烤鸭', '4.5', '2185', '8.00', '45', '欢迎光临，用餐高峰期提前下单，谢谢。', '2', null);

-- ----------------------------
-- Table structure for `shoptype`
-- ----------------------------
DROP TABLE IF EXISTS `shoptype`;
CREATE TABLE `shoptype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoptype
-- ----------------------------
INSERT INTO `shoptype` VALUES ('1', '美食');
INSERT INTO `shoptype` VALUES ('2', '午餐');
INSERT INTO `shoptype` VALUES ('3', '果蔬生鲜');
INSERT INTO `shoptype` VALUES ('4', '医药健康');
INSERT INTO `shoptype` VALUES ('5', '大牌五折');
INSERT INTO `shoptype` VALUES ('6', '浪漫鲜花');
INSERT INTO `shoptype` VALUES ('7', '麻辣烫');
INSERT INTO `shoptype` VALUES ('8', '地方菜系');
INSERT INTO `shoptype` VALUES ('9', '披萨意面');
INSERT INTO `shoptype` VALUES ('10', '地方小吃');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `balance` float(10,2) NOT NULL DEFAULT '0.00',
  `tell` varchar(20) NOT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'admin', 'admin', '0.00', '17607477752', null);
INSERT INTO `userinfo` VALUES ('2', 'name', 'pwd', '0.00', '13825818442', null);

-- ----------------------------
-- View structure for `ordergoodsview`
-- ----------------------------
DROP VIEW IF EXISTS `ordergoodsview`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ordergoodsview` AS select `orderinfo`.`id` AS `id`,`orderinfo`.`userid` AS `userid`,`ordergoods`.`goodsid` AS `goodsid`,`ordergoods`.`quantity` AS `quantity`,`goodsinfo`.`name` AS `goodsname`,`goodsinfo`.`price` AS `price`,`shopinfo`.`name` AS `shopname`,`orderinfo`.`date` AS `date`,`orderinfo`.`status` AS `status` from (((`ordergoods` join `orderinfo`) join `shopinfo`) join `goodsinfo`) where ((`ordergoods`.`orderid` = `orderinfo`.`id`) and (`orderinfo`.`shopid` = `shopinfo`.`id`) and (`ordergoods`.`goodsid` = `goodsinfo`.`id`)) ;
