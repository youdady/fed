/**
*  Module
*
* gTableTest Description
*/
angular.module('test', ['objectTable'])
.controller('mainController', function($scope) {
    $scope.data1 = [
        { id: 1, 
          name: "徐浩鹏", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 2, 
          name: "李明豪", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 4,
          name: "尹飞燕", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 5, 
          name: "全凯俊", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 6, 
            name: "马驰傲", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 7, 
            name: "张铸涛", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 8, 
            name: "许丹妮", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 9, 
            name: "陈浩", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 5,
          grade02:0, grade03:0 
        },
        { id: 10, 
            name: "杨登欢", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 12, 
            name: "任军", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 13, 
            name: "章宇凯", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 14, 
            name: "潘佳琦", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 15, 
            name: "裘家威", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 16, 
            name: "李玲巧", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 17, 
            name: "郑天阳", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 18, 
            name: "范莎莎", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 19, 
            name: "王永琪", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 21, 
            name: "白逢喜", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 22, 
            name: "夏远征", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 23, 
            name: "李传访", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 24, 
            name: "曾丽丽", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 25,
          grade02:0, grade03:0 
        },
        { id: 25, 
            name: "陈王超", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 26, 
            name: "林群栋", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 27, 
            name: "王瑶", 
            preExam1: "免考", preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 20,
          grade02:0, grade03:0 
        },
        { id: 28, 
            name: "王浩", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 29, 
            name: "叶圣辉", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 30, 
            name: "阮盛威", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 31, 
            name: "徐道聪", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 15,
          grade02:0, grade03:0 
        },
        { id: 32, 
            name: "高启中", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 34, 
            name: "姚文辉", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 35, 
            name: "倪浩", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 36, 
            name: "鲁好德", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 37, 
            name: "张天一", 
            preExam1: 0, preExam2: 0, preExam3: 0,
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 38, 
            name: "李彦东", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 39, 
            name: "刘晓辉", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 41, 
            name: "徐鹏", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        }
    ];
    $scope.data2 = [
        { id: 01, 
          name: "余家宝", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 02, 
          name: "郑柯柯", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 03, 
          name: "单超艺", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 04,
          name: "沈智婷", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 05, 
          name: "赵芳燕", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 06, 
            name: "周陈", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 07, 
            name: "戴王辉", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 08, 
            name: "方搏", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 09, 
            name: "陈猛", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 10, 
            name: "周冰婕", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 11, 
            name: "陈章文", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 12, 
            name: "胡森方", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 13, 
            name: "廖定旺", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 14, 
            name: "沈锋", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 16, 
            name: "唐宁", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 18, 
            name: "张家林", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 20, 
            name: "卫银宇", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 21, 
            name: "王翔宇", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 22, 
            name: "瞿骁皓", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 23, 
            name: "江俊杰", 
            preExam1: "免考", preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 24, 
            name: "郑爱萍", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 25,
          grade02:0, grade03:0 
        },
        { id: 25, 
            name: "郑大强", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 27, 
            name: "黄荣基", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 20,
          grade02:0, grade03:0 
        },
        { id: 29, 
            name: "谢秀提", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 30, 
            name: "毛杰", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 31, 
            name: "王志斌", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 32, 
            name: "吴昊", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 33, 
            name: "赵凯峰", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 34, 
            name: "张奎骁", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 35, 
            name: "郑钟楠", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 36, 
            name: "陈兴博", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 37, 
            name: "杨虹", 
            preExam1: 0, preExam2: 0, preExam3: 0,
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 38, 
            name: "刘毅梅", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 39, 
            name: "王丽娜", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 40, 
            name: "童伟键", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        },
        { id: 41, 
            name: "伍吉康", 
            preExam1: 0, preExam2: 0, preExam3: 0, 
            work01: 0, work02: 0, work03: 0, work04: 0, 
            work05: 0, work06: 0, work07: 0, work08: 0, 
            work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0 
        }
    ];
    $scope.getGrade = function(data){
        //return if empty or not ready
        if(!data || !data.length) return;

        for(var i=0; i<data.length; i++){
          // totalNumber = totalNumber + parseFloat(data[i].money);
          data[i].isPreExame=false;
          data[i].preExam1Data=data[i].preExam1;
          data[i].preExam2Data=data[i].preExam2;
          data[i].preExam3Data=data[i].preExam3;
          if (data[i].preExam1=="免考"||data[i].preExam2=="免考"||data[i].preExam3=="免考") {
              data[i].preExam1Data=data[i].preExam2Data=data[i].preExam3Data=0;
              data[i].grade03=100;
              data[i].isPreExame=true;
          };
          data[i].grade01=data[i].preExam1Data+data[i].preExam2Data+data[i].preExam3Data+data[i].work01+data[i].work02+data[i].work03+data[i].work04+data[i].work05+data[i].work06+data[i].work07+data[i].work08+data[i].work09+data[i].work10+data[i].github;
          data[i].grade04=data[i].grade01*0.2+data[i].grade02*0.3+data[i].grade03*0.5;
         
        }

    };
    
    $scope.getGrade($scope.data1);
    $scope.getGrade($scope.data2);
})