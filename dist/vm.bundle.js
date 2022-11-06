/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./vm/vm.js":
/*!******************!*\
  !*** ./vm/vm.js ***!
  \******************/
/***/ (() => {

eval("class VM {\n  constructor(vm){\n    this.device = {}\n    this.device.disk = {\n      \"1\": {\n        name: \"prim-part\",\n        contents: {\n          \"1/bcd\": {\n            'type': 'file',\n            'filename': 'bcd',\n            'path': '1/bcd'\n          }\n        }\n      }\n    }\n    this.bootloader = this.device.disk['1'].contents['1/bcd']\n    this.device.exts = {}\n    this.device.display = document.querySelector(\"div[for=\" + vm.id + \"]\")\n    this.device.execute = (lib, cmd, args) => {\n      if (args){\n        return this.functions[lib][cmd](args.split(\" \"))\n      }else {\n        return this.functions[lib][cmd]() \n      }  \n    }\n    this.functions = {}\n    this.functions.fs= {}\n    this.functions.gimp = {}\n    //\n    this.functions.fs.readPart = (args) => {\n      return this.device.disk[args[0]]\n    }\n    //\n    this.functions.fs.listPart = () => {\n      return this.device.disk\n    }\n    //\n    this.functions.fs.readFile = (args) => {\n     if (this.device.disk[args[0].split(\"/\")[0]].contents[args[0]]){\n        return this.device.disk[args[0].split(\"/\")[0]].contents[args[0]]\n     } else {\n      return \"File does not exist\" \n     }\n    }\n    //\n    this.functions.fs.writeFile = (args) => {\n      if (this.device.disk[args[0].split(\"/\")[0]].contents[args[0]]){\n        this.device.disk[args[0].split(\"/\")[0]].contents[args[0]].data += \"\\r\\n \" + args[1]\n      } else {\n        if (args[0].split(\"/\").length -  1 > 1){\nvar carIndex = args[0].split(\"/\").indexOf(args[0].split('/')[args[0].split('/').length]);//get  \"car\" index\n//remove car from the colors array\nvar folder = args[0].split(\"/\")\nfolder.splice(carIndex, 1)\n          if (this.device.disk[args[0].split(\"/\")[0]].contents[folder.join('/')]){\n            if (this.device.disk[args[0].split(\"/\")[0]].contents[folder.join('/')].type == 'folder'){\n              this.device.disk[args[0].split(\"/\")[0]].contents[args[0]] = {\n               'type': 'file',\n               'filename': args[0].split('/')[args[0].split('/').length - 1],\n               'path': args[0],\n               'data': args[1],\n               'created': Date(\"now\")\n              }\n            } else {\n              return \"File is not a folder\"\n            }\n          } else {\n            return \"Folder does not exist\"\n          }\n        } else {\n          this.device.disk[args[0].split(\"/\")[0]].contents[args[0]] = {\n             'type': 'file',\n             'filename': args[0].split('/')[args[0].split('/').length - 1],\n             'path': args[0],\n             'data': args[1],\n             'created': Date(\"now\")\n          }\n        }\n      }\n    }\n    //\n    this.functions.fs.makeDir = (args) => {\n      if (!this.device.disk[args[0].split(\"/\")[0]].contents[args[0]]){\n        this.device.disk[args[0].split(\"/\")[0]].contents[args[0]] = {\n             'type': 'folder',\n             'filename': args[0].split('/')[args[0].split('/').length - 1],\n             'path': args[0],\n             'created': Date(\"now\")\n        } \n      } else {\n         return \"Already exists\"\n      }\n    }\n    //\n  }\n}\n\n//# sourceURL=webpack://vvm/./vm/vm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./vm/vm.js"]();
/******/ 	
/******/ })()
;