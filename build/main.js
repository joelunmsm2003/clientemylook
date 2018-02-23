webpackJsonp([19],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleservicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetalleservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleservicioPage = (function () {
    function DetalleservicioPage(_servicio, navCtrl, navParams) {
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000';
        this.serv = navParams.get("servicio");
        console.log('sericmsmss...', this.serv);
    }
    DetalleservicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DetalleservicioPage');
        console.log('llslslsl', this.navParams.get("servicio"));
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.ped = data[0]['pedidos'];
        });
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.socia__photo = data[0]['socia__photo'];
        });
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.fecha = data[0]['fecha'];
        });
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.fecha_inicio = data[0]['fecha_inicio'];
        });
    };
    DetalleservicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalleservicio',template:/*ion-inline-start:"/home/joel/lima/src/pages/detalleservicio/detalleservicio.html"*/'<!--\n  Generated template for the DetalleservicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle de servicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-card>\n\n   <ion-row>\n\n\n    <ion-col col-12 padding><img style=\'border-radius: 50%;\n    padding: 45px;\' src=\'{{host}}/{{socia__photo}}\'></ion-col>\n    \n  \n   </ion-row>  \n \n\n  <ion-item *ngFor="let item of ped">\n\n\n   <ion-row>\n    <!-- <ion-col col-2><img src=\'{{host}}/{{item.subcategoria__categoria__icono}}\'></ion-col> -->\n    <ion-col col-10><h2>{{item.subcategoria__nombre}}</h2>\n    <p>S/. {{item.subcategoria__precio}}</p></ion-col>\n   </ion-row>\n\n  </ion-item>\n\n\n  <ion-item> \n   <ion-row>\n	<ion-col col-6>Fecha: {{fecha}}</ion-col>\n	<ion-col col-6>Hora: {{fecha_inicio}}</ion-col>\n\n\n   </ion-row>\n  </ion-item> \n\n\n \n\n\n\n\n</ion-card>\n\n <button block ion-button color="dark" round (click)=\'aceptar()\'>Aceptar</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/joel/lima/src/pages/detalleservicio/detalleservicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DetalleservicioPage);
    return DetalleservicioPage;
}());

//# sourceMappingURL=detalleservicio.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reserva_reserva__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_servicios_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertaPage = (function () {
    function AlertaPage(authHttp, _servicio, storage, navCtrl, geolocation, zone, platform, localStorage, mapService, spinner, viewCtrl, navParams) {
        var _this = this;
        this.authHttp = authHttp;
        this._servicio = _servicio;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.addressElement = null;
        this.address = '';
        this.host = 'http://104.236.247.3:8000';
        this.reservaPage = __WEBPACK_IMPORTED_MODULE_8__reserva_reserva__["a" /* ReservaPage */];
        this.platform.ready().then(function () { return _this.loadMaps(); });
    }
    AlertaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.ubicacion = 'jsjsjsj';
    };
    AlertaPage.prototype.loadMaps = function () {
        var _this = this;
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
        console.log('servicio..', this.navParams.get("servicio"));
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            //this.servicio=data
            return _this.iraLocation(data[0]['latitud'], data[0]['longitud']);
        }
        //console.log('ser...',data[0])
        );
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.ped = data[0]['pedidos'];
        });
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.photo_cliente = data[0]['cliente__photo'];
        });
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.nombre_cliente = data[0]['cliente__nombre'];
        });
    };
    AlertaPage.prototype.initializeMap = function () {
        var _this = this;
        var that = this;
        //that.currentLocation();
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 16,
                center: { lat: 12, lng: -12 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: true,
            });
            // Map drag started
            _this.map.addListener('dragstart', function () {
                console.log('Drag start');
            });
            // Map dragging
            _this.map.addListener('drag', function () {
                that.address = 'Searching...';
            });
            //Reload markers every time the map moves
            _this.map.addListener('dragend', function () {
                var map_center = that.getMapCenter();
                var latLngObj = { 'lat': map_center.lat(), 'long': map_center.lng() };
                that.ubicacion = latLngObj;
                //that.getAddress(latLngObj);
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                google.maps.event.trigger(_this.map, 'resize');
                mapEle.classList.add('show-map');
            });
            google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                _this.zone.run(function () {
                    _this.resizeMap();
                });
            });
        });
    };
    AlertaPage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var latLngObj = { 'lat': location.lat(), 'long': location.lng() };
            //this.getAddress(latLngObj);
            var options = {
                center: location,
                zoom: 16
            };
            _this.map.setOptions(options);
        });
    };
    AlertaPage.prototype.currentLocation = function () {
        var _this = this;
        this.spinner.load();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latLngObj = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
            // Display  Marker
            _this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            //alert(latLngObj)
            //this.storage.set('ubicacion', latLngObj)
            //this.getAddress(latLngObj);
            _this.spinner.dismiss();
            localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
            return latLngObj;
        }, function (err) {
            console.log(err);
        });
    };
    AlertaPage.prototype.iraLocation = function (lat, long) {
        this.spinner.load();
        console.log('ubicando...', lat, long);
        var latLng = lat;
        var latLngObj = long;
        // Display  Marker
        this.map.setCenter(new google.maps.LatLng(latLng, latLngObj));
        //alert(latLngObj)
        //this.storage.set('ubicacion', latLngObj)
        //this.getAddress(latLngObj);
        this.spinner.dismiss();
        localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
        return latLngObj;
    };
    AlertaPage.prototype.getAddress = function (latLngObj) {
        var _this = this;
        // Get the address object based on latLngObj
        this.mapService.getStreetAddress(latLngObj).subscribe(function (s_address) {
            if (s_address.status == "ZERO_RESULTS") {
                _this.mapService.getAddress(latLngObj).subscribe(function (address) {
                    _this.address = address.results[0].formatted_address;
                    _this.getAddressComponentByPlace(address.results[0], latLngObj);
                }, function (err) { return console.log("Error in getting the street address " + err); });
            }
            else {
                _this.address = s_address.results[0].formatted_address;
                _this.getAddressComponentByPlace(s_address.results[0], latLngObj);
                //alert(latLngObj)
                //this.storage.set('ubicacion', latLngObj)
                //alert(this.address);
            }
        }, function (err) {
            //alert('No Address found ' + err);
        });
    };
    AlertaPage.prototype.getMapCenter = function () {
        return this.map.getCenter();
    };
    AlertaPage.prototype.createAutocomplete = function (addressEl) {
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    var latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() };
                    //this.getAddress(latLngObj);
                    sub.next(place.geometry.location);
                }
            });
        });
    };
    AlertaPage.prototype.getAddressComponentByPlace = function (place, latLngObj) {
        var components;
        components = {};
        for (var i = 0; i < place.address_components.length; i++) {
            var ac = place.address_components[i];
            components[ac.types[0]] = ac.long_name;
        }
        var addressObj = {
            street: (components.street_number) ? components.street_number : 'not found',
            area: components.route,
            city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
            country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
            postCode: components.postal_code,
            loc: [latLngObj.long, latLngObj.lat],
            address: this.address
        };
        localStorage.clear();
        localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
        return components;
    };
    AlertaPage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    AlertaPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AlertaPage.prototype.errorAlert = function (title, message) {
        alert('Error in Alert');
    };
    AlertaPage.prototype.reserva = function (dia, hora, ubicacion) {
        console.log('hhddh', dia, hora);
        this.storage.set('dia', dia);
        this.storage.set('hora', hora);
        this.storage.set('ubicacion', ubicacion);
    };
    AlertaPage.prototype.enviaracliente = function (data) {
        var creds = JSON.stringify(data);
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post('http://104.236.247.3:8000/aceptarservicio/', creds, options)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    AlertaPage.prototype.aceptar = function () {
        var _this = this;
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.enviaracliente(data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlertaPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlertaPage.prototype, "searchbar", void 0);
    AlertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alerta',template:/*ion-inline-start:"/home/joel/lima/src/pages/alerta/alerta.html"*/'\n<ion-header>\n\n  <ion-navbar color=\'white\'>\n    <ion-title>Detalle de servicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-buttons float-end class="current-location">\n    <button ion-button icon-only (click)="currentLocation()">\n      <img src="./assets/icon/current-location.png" alt="">\n    </button>\n  </ion-buttons>\n\n  <ion-searchbar autocorrect="off" autocapitalize="off" spellcheck="off" #searchbar placeholder="Search..." class="search-box"></ion-searchbar>\n\n  <div #map id="map" class="map"></div>\n  <div class="centerMarker"></div>\n  <div class="address-view">\n    <ion-list>\n      <ion-item no-lines class="help-text">\n        \n      </ion-item>\n       \n\n     \n    </ion-list>\n  </div>\n\n\n  <ion-card>\n\n  <ion-row>\n\n\n    <ion-col col-4><img src=\'{{host}}/{{photo_cliente}}\'></ion-col>\n    <ion-col col-8 padding>{{nombre_cliente}}</ion-col>\n  \n   </ion-row> \n \n\n  <ion-item *ngFor="let item of ped">\n\n\n   <ion-row>\n    <ion-col col-2><img src=\'{{host}}/{{item.subcategoria__categoria__icono}}\'></ion-col>\n    <ion-col col-10><h2>{{item.subcategoria__nombre}}</h2>\n    <p>S/. {{item.subcategoria__precio}}</p></ion-col>\n   </ion-row>\n\n\n\n    \n    \n  </ion-item>\n\n\n  <button block ion-button color="dark" round (click)=\'aceptar()\'>Aceptar</button>\n\n\n\n\n\n</ion-card>\n\n\n\n\n  \n  \n\n</ion-content>'/*ion-inline-end:"/home/joel/lima/src/pages/alerta/alerta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_9__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AlertaPage);
    return AlertaPage;
}());

//# sourceMappingURL=alerta.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_map_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cuando_cuando__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__venta_venta__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, geolocation, zone, platform, localStorage, mapService, spinner, viewCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.addressElement = null;
        this.address = '';
        this.cuandoPage = __WEBPACK_IMPORTED_MODULE_7__cuando_cuando__["a" /* CuandoPage */];
        this.ventaPage = __WEBPACK_IMPORTED_MODULE_8__venta_venta__["a" /* VentaPage */];
        this.platform.ready().then(function () { return _this.loadMaps(); });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    HomePage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    HomePage.prototype.initializeMap = function () {
        var _this = this;
        var that = this;
        that.currentLocation();
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 16,
                center: { lat: 12.971599, lng: 77.594563 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: true,
            });
            // Map drag started
            _this.map.addListener('dragstart', function () {
                console.log('Drag start');
            });
            // Map dragging
            _this.map.addListener('drag', function () {
                that.address = 'Searching...';
            });
            //Reload markers every time the map moves
            _this.map.addListener('dragend', function () {
                var map_center = that.getMapCenter();
                var latLngObj = { 'lat': map_center.lat(), 'long': map_center.lng() };
                //alert(latLngObj);
                that.getAddress(latLngObj);
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                google.maps.event.trigger(_this.map, 'resize');
                mapEle.classList.add('show-map');
            });
            google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                _this.zone.run(function () {
                    _this.resizeMap();
                });
            });
        });
    };
    HomePage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var latLngObj = { 'lat': location.lat(), 'long': location.lng() };
            _this.getAddress(latLngObj);
            var options = {
                center: location,
                zoom: 16
            };
            _this.map.setOptions(options);
        });
    };
    HomePage.prototype.currentLocation = function () {
        var _this = this;
        this.spinner.load();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latLngObj = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
            // Display  Marker
            _this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            //alert(latLngObj)
            _this.getAddress(latLngObj);
            _this.spinner.dismiss();
            localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
            return latLngObj;
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getAddress = function (latLngObj) {
        var _this = this;
        // Get the address object based on latLngObj
        this.mapService.getStreetAddress(latLngObj).subscribe(function (s_address) {
            if (s_address.status == "ZERO_RESULTS") {
                _this.mapService.getAddress(latLngObj).subscribe(function (address) {
                    _this.address = address.results[0].formatted_address;
                    _this.getAddressComponentByPlace(address.results[0], latLngObj);
                }, function (err) { return console.log("Error in getting the street address " + err); });
            }
            else {
                _this.address = s_address.results[0].formatted_address;
                _this.getAddressComponentByPlace(s_address.results[0], latLngObj);
                //alert(latLngObj)
                //alert(this.address);
            }
        }, function (err) {
            //alert('No Address found ' + err);
        });
    };
    HomePage.prototype.getMapCenter = function () {
        return this.map.getCenter();
    };
    HomePage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    var latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() };
                    _this.getAddress(latLngObj);
                    sub.next(place.geometry.location);
                }
            });
        });
    };
    HomePage.prototype.getAddressComponentByPlace = function (place, latLngObj) {
        var components;
        components = {};
        for (var i = 0; i < place.address_components.length; i++) {
            var ac = place.address_components[i];
            components[ac.types[0]] = ac.long_name;
        }
        var addressObj = {
            street: (components.street_number) ? components.street_number : 'not found',
            area: components.route,
            city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
            country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
            postCode: components.postal_code,
            loc: [latLngObj.long, latLngObj.lat],
            address: this.address
        };
        localStorage.clear();
        localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
        return components;
    };
    HomePage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    HomePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    HomePage.prototype.errorAlert = function (title, message) {
        alert('Error in Alert');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "searchbar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/joel/lima/src/pages/home/home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Donde deseas el servicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-buttons float-end class="current-location">\n    <button ion-button icon-only (click)="currentLocation()">\n      <img src="./assets/icon/current-location.png" alt="">\n    </button>\n  </ion-buttons>\n\n  <ion-searchbar autocorrect="off" autocapitalize="off" spellcheck="off" #searchbar placeholder="Search..." class="search-box"></ion-searchbar>\n\n  <div #map id="map" class="map"></div>\n  <div class="centerMarker"></div>\n  <div class="address-view">\n    <ion-list>\n      <ion-item no-lines class="help-text">\n        Arrastrar mapa para seleccionar una ubicacion\n      </ion-item>\n      <!-- <ion-item no-lines class="address-item">\n        <ion-label stacked class="title-label">ADDRESS</ion-label>\n        <ion-textarea class="address" [(ngModel)]="address"></ion-textarea>\n      </ion-item> -->\n     \n\n     \n    </ion-list>\n  </div>\n\n   <button ion-button block  color=\'dark\' [navPush]="cuandoPage">Continuar</button>\n     \n</ion-content>\n\n<'/*ion-inline-end:"/home/joel/lima/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagoPage = (function () {
    function PagoPage(authHttp, view, navCtrl, navParams) {
        this.authHttp = authHttp;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagoPage');
    };
    PagoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    PagoPage.prototype.pagar = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        var creds = JSON.stringify({ categoria: '99', socia: 'data' });
        this.authHttp.post('http://104.236.247.3:8000/creatoken/', creds, options)
            .subscribe(function (data) {
        });
    };
    PagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pago',template:/*ion-inline-start:"/home/joel/lima/src/pages/pago/pago.html"*/'<!--\n  Generated template for the PagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Pago </ion-title>\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<button ion-button (click)=\'pagar()\' large>Large</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/joel/lima/src/pages/pago/pago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PagoPage);
    return PagoPage;
}());

//# sourceMappingURL=pago.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_registrosocia_registrosocia__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = (function () {
    function RegistroPage(storage, _perfil, alertCtrl, view, formBuilder, appCtrl, http, navCtrl, navParams) {
        this.storage = storage;
        this._perfil = _perfil;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this.formBuilder = formBuilder;
        this.appCtrl = appCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.todo = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            nombre: [''],
            password: [''],
        });
        this.registrosociaPage = __WEBPACK_IMPORTED_MODULE_4__pages_registrosocia_registrosocia__["a" /* RegistrosociaPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Bienvenido, porfavor ingresa',
            buttons: ['OK']
        });
        alert.present();
    };
    RegistroPage.prototype.emailrepetido = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Este correo ya existe porfavor escoja otra',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    RegistroPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    RegistroPage.prototype.logForm = function (env) {
        var _this = this;
        console.log(env.email);
        var creds = JSON.stringify({ username: env.email, password: env.password });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post('http://104.236.247.3:8000/registro/', env, options)
            .subscribe(function (data) {
            console.log('eroo..', data['_body']);
            if (data['_body'] == '"ok"') {
                console.log('ingrese');
                ///Logeandose
                _this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    console.log('ingresando..', data);
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this.view.dismiss();
                });
            }
            if (data['_body'] == 0) {
                _this.emailrepetido();
            }
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro',template:/*ion-inline-start:"/home/joel/lima/src/pages/registro/registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Registrate </ion-title>\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n<!-- \n<div class="app-icon">\n        <ion-icon name="ios-chatbubbles-outline" ></ion-icon>\n      </div> -->\n\n<ion-list inset>\n\n <form (ngSubmit)="logForm(user)" [formGroup]="todo">\n     \n\n      <ion-item>\n            <ion-input placeholder="Email"  formControlName="email"  name=\'email\' id="loginField" type="text" required [(ngModel)] = "user.email"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n            <ion-input placeholder="Nombre" formControlName="nombre"  name=\'nombre\' id="loginField" type="text" required [(ngModel)] = "user.nombre"></ion-input>\n      </ion-item>\n\n      <ion-item>\n            <ion-input placeholder="Password" formControlName="password" name="password" id="loginField" type="password" required [(ngModel)] = "user.password"></ion-input>\n      </ion-item>\n\n\n\n\n      <button round ion-button type="submit" color=\'dark\' block [disabled]="!todo.valid">Registrar</button>\n    </form>\n\n\n\n<button round ion-button  color=\'white\' block  [navPush]="loginPage" >Ingresar</button>\n\n  <!--    <button round ion-button  color=\'white\' block  [navPush]="registrosociaPage" >Conviertete en socia</button>-->\n\n\n</ion-list>\n\n\n</ion-content>\n\n<mytabs></mytabs>\n\n\n'/*ion-inline-end:"/home/joel/lima/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroprincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_registrosocia_registrosocia__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroprincipalPage = (function () {
    function RegistroprincipalPage(storage, _perfil, alertCtrl, view, formBuilder, appCtrl, http, navCtrl, navParams) {
        this.storage = storage;
        this._perfil = _perfil;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this.formBuilder = formBuilder;
        this.appCtrl = appCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.todo = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            nombre: [''],
            password: [''],
        });
        this.registrosociaPage = __WEBPACK_IMPORTED_MODULE_4__pages_registrosocia_registrosocia__["a" /* RegistrosociaPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
    }
    RegistroprincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroprincipalPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Bienvenido, porfavor ingresa',
            buttons: ['OK']
        });
        alert.present();
    };
    RegistroprincipalPage.prototype.emailrepetido = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Este correo ya existe porfavor escoja otra',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    RegistroprincipalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    RegistroprincipalPage.prototype.logForm = function (env) {
        var _this = this;
        console.log(env.email);
        var creds = JSON.stringify({ username: env.email, password: env.password });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post('http://104.236.247.3:8000/registro/', env, options)
            .subscribe(function (data) {
            console.log('eroo..', data['_body']);
            if (data['_body'] == '"ok"') {
                console.log('ingrese');
                ///Logeandose
                _this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    console.log('ingresando..', data);
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this._perfil.miperfil()
                        .subscribe(function (reference) {
                        return _this.storage.set('grupo', reference[0]['user__groups__name']);
                    });
                    //this.appCtrl.getRootNav().push(IntroPage);
                });
            }
            if (data['_body'] == 0) {
                _this.emailrepetido();
            }
        });
    };
    RegistroprincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registroprincipal',template:/*ion-inline-start:"/home/joel/lima/src/pages/registroprincipal/registroprincipal.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>  </ion-title>\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n<!-- \n<div class="app-icon">\n        <ion-icon name="ios-chatbubbles-outline" ></ion-icon>\n      </div> -->\n\n<ion-list inset>\n\n <form (ngSubmit)="logForm(user)" [formGroup]="todo">\n     \n\n      <ion-item>\n            <ion-input placeholder="Email"  formControlName="email"  name=\'email\' id="loginField" type="text" required [(ngModel)] = "user.email"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n            <ion-input placeholder="Nombre" formControlName="nombre"  name=\'nombre\' id="loginField" type="text" required [(ngModel)] = "user.nombre"></ion-input>\n      </ion-item>\n\n      <ion-item>\n            <ion-input placeholder="Password" formControlName="password" name="password" id="loginField" type="password" required [(ngModel)] = "user.password"></ion-input>\n      </ion-item>\n\n\n\n\n      <button round ion-button type="submit" color=\'dark\' block [disabled]="!todo.valid">Registrar</button>\n    </form>\n\n\n\n<button round ion-button  color=\'white\' block  [navPush]="loginPage" >Ingresar</button>\n\n  <!--    <button round ion-button  color=\'white\' block  [navPush]="registrosociaPage" >Conviertete en socia</button>-->\n\n\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/joel/lima/src/pages/registroprincipal/registroprincipal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegistroprincipalPage);
    return RegistroprincipalPage;
}());

//# sourceMappingURL=registroprincipal.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alerta/alerta.module": [
		338,
		18
	],
	"../pages/ayuda/ayuda.module": [
		339,
		17
	],
	"../pages/cuando/cuando.module": [
		340,
		16
	],
	"../pages/detalleservicio/detalleservicio.module": [
		341,
		15
	],
	"../pages/historial/historial.module": [
		342,
		14
	],
	"../pages/historialsocia/historialsocia.module": [
		343,
		13
	],
	"../pages/intro/intro.module": [
		344,
		12
	],
	"../pages/login/login.module": [
		345,
		11
	],
	"../pages/loginprincipal/loginprincipal.module": [
		346,
		10
	],
	"../pages/pago/pago.module": [
		347,
		9
	],
	"../pages/perfil/perfil.module": [
		348,
		8
	],
	"../pages/registro/registro.module": [
		349,
		7
	],
	"../pages/registroprincipal/registroprincipal.module": [
		350,
		6
	],
	"../pages/registrosocia/registrosocia.module": [
		351,
		5
	],
	"../pages/reserva/reserva.module": [
		352,
		4
	],
	"../pages/servicio/servicio.module": [
		353,
		3
	],
	"../pages/splash/splash.module": [
		354,
		2
	],
	"../pages/tabs/tabs.module": [
		355,
		1
	],
	"../pages/venta/venta.module": [
		356,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_map_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reserva_reserva__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UbicacionPage = (function () {
    function UbicacionPage(storage, navCtrl, geolocation, zone, platform, localStorage, mapService, spinner, viewCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.addressElement = null;
        this.address = '';
        this.reservaPage = __WEBPACK_IMPORTED_MODULE_7__reserva_reserva__["a" /* ReservaPage */];
        this.platform.ready().then(function () { return _this.loadMaps(); });
    }
    UbicacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.ubicacion = 'jsjsjsj';
    };
    UbicacionPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    UbicacionPage.prototype.initializeMap = function () {
        var _this = this;
        var that = this;
        that.currentLocation();
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 16,
                center: { lat: 12.971599, lng: 77.594563 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: true,
            });
            // Map drag started
            _this.map.addListener('dragstart', function () {
                console.log('Drag start');
            });
            // Map dragging
            _this.map.addListener('drag', function () {
                that.address = 'Searching...';
            });
            //Reload markers every time the map moves
            _this.map.addListener('dragend', function () {
                var map_center = that.getMapCenter();
                var latLngObj = { 'lat': map_center.lat(), 'long': map_center.lng() };
                that.ubicacion = latLngObj;
                //that.getAddress(latLngObj);
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                google.maps.event.trigger(_this.map, 'resize');
                mapEle.classList.add('show-map');
            });
            google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                _this.zone.run(function () {
                    _this.resizeMap();
                });
            });
        });
    };
    UbicacionPage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var latLngObj = { 'lat': location.lat(), 'long': location.lng() };
            //this.getAddress(latLngObj);
            _this.ubicacion = latLngObj;
            var options = {
                center: location,
                zoom: 16
            };
            _this.map.setOptions(options);
        });
    };
    UbicacionPage.prototype.currentLocation = function () {
        var _this = this;
        this.spinner.load();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latLngObj = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
            // Display  Marker
            _this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            //alert(latLngObj)
            //this.storage.set('ubicacion', latLngObj)
            _this.ubicacion = latLngObj;
            //this.getAddress(latLngObj);
            _this.spinner.dismiss();
            localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
            return latLngObj;
        }, function (err) {
            console.log(err);
        });
    };
    UbicacionPage.prototype.getAddress = function (latLngObj) {
        var _this = this;
        // Get the address object based on latLngObj
        this.mapService.getStreetAddress(latLngObj).subscribe(function (s_address) {
            if (s_address.status == "ZERO_RESULTS") {
                _this.mapService.getAddress(latLngObj).subscribe(function (address) {
                    _this.address = address.results[0].formatted_address;
                    _this.getAddressComponentByPlace(address.results[0], latLngObj);
                }, function (err) { return console.log("Error in getting the street address " + err); });
            }
            else {
                _this.address = s_address.results[0].formatted_address;
                _this.getAddressComponentByPlace(s_address.results[0], latLngObj);
                //alert(latLngObj)
                //this.storage.set('ubicacion', latLngObj)
                //alert(this.address);
            }
        }, function (err) {
            //alert('No Address found ' + err);
        });
    };
    UbicacionPage.prototype.getMapCenter = function () {
        return this.map.getCenter();
    };
    UbicacionPage.prototype.createAutocomplete = function (addressEl) {
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    var latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() };
                    //this.getAddress(latLngObj);
                    sub.next(place.geometry.location);
                }
            });
        });
    };
    UbicacionPage.prototype.getAddressComponentByPlace = function (place, latLngObj) {
        var components;
        components = {};
        for (var i = 0; i < place.address_components.length; i++) {
            var ac = place.address_components[i];
            components[ac.types[0]] = ac.long_name;
        }
        var addressObj = {
            street: (components.street_number) ? components.street_number : 'not found',
            area: components.route,
            city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
            country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
            postCode: components.postal_code,
            loc: [latLngObj.long, latLngObj.lat],
            address: this.address
        };
        localStorage.clear();
        localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
        return components;
    };
    UbicacionPage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    UbicacionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    UbicacionPage.prototype.errorAlert = function (title, message) {
        alert('Error in Alert');
    };
    UbicacionPage.prototype.reserva = function (dia, hora, ubicacion, referencia) {
        console.log('hhddh', dia, hora);
        this.storage.set('dia', dia);
        this.storage.set('hora', hora);
        this.storage.set('ubicacion', ubicacion);
        this.storage.set('referencia', referencia);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UbicacionPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UbicacionPage.prototype, "searchbar", void 0);
    UbicacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ubicacion',template:/*ion-inline-start:"/home/joel/lima/src/pages/ubicacion/ubicacion.html"*/'\n<ion-header>\n\n  <ion-navbar color=\'white\'>\n    <ion-title>Donde y cuando lo deseas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n <ion-buttons float-end class="current-location">\n    <button ion-button icon-only (click)="currentLocation()">\n      <img src="./assets/icon/current-location.png" alt="">\n    </button>\n  </ion-buttons>\n\n  <ion-searchbar autocorrect="off" autocapitalize="off" spellcheck="off" #searchbar placeholder="Buscar" class="search-box"></ion-searchbar>\n\n  <div #map id="map" class="map"></div>\n  <div class="centerMarker"></div>\n  <!-- <div class="address-view">\n    <ion-list>\n      <ion-item no-lines class="help-text">\n        \n      </ion-item>\n       \n\n     \n    </ion-list>\n  </div> -->\n\n <form #loginForm="ngForm" autocomplete="off" style="position:absolute;margin-top:0em;width: 100%;">\n    \n\n    \n\n          <ion-item>\n            <ion-label>Que dia?</ion-label>\n           <ion-datetime name="dia"  displayFormat="MM/DD/YYYY" [(ngModel)]="dia" max="2018-12-31"></ion-datetime>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Aque hora?</ion-label>\n            <ion-datetime name="hora"  displayFormat="HH:mm" [(ngModel)]="hora"></ion-datetime>\n          </ion-item>\n\n\n          <ion-item>\n    <ion-label color="dark">Direccion</ion-label>\n    <ion-input name="direccion"  type="text" [(ngModel)]="referencia"  ></ion-input>\n  </ion-item>\n\n\n\n \n\n<ion-list padding>\n\n <button ion-button  block round color="dark" (click)=\'reserva(dia,hora,ubicacion,referencia)\'  [navPush]="reservaPage"  >Continuar</button>\n\n</ion-list>\n</form>\n     \n\n  \n\n</ion-content>\n\n\n<mytabs></mytabs>\n'/*ion-inline-end:"/home/joel/lima/src/pages/ubicacion/ubicacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UbicacionPage);
    return UbicacionPage;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the NotificacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificacionProvider = (function () {
    function NotificacionProvider(authHttp, _http) {
        this.authHttp = authHttp;
        this._http = _http;
        console.log('Hello ServiciosProvider Provider');
    }
    NotificacionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificacionProvider);
    return NotificacionProvider;
}());

//# sourceMappingURL=notificacion.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuandoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CuandoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuandoPage = (function () {
    function CuandoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CuandoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CuandoPage');
    };
    CuandoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cuando',template:/*ion-inline-start:"/home/joel/lima/src/pages/cuando/cuando.html"*/'<!--\n  Generated template for the CuandoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cuando</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n 	<ion-list style=\'margin-top: 72px;\n    padding: 15px;\'>\n\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>Que dia y aque hora quieres el servicio?</div>\n</div>\n\n  <ion-item>\n  <ion-label>Date</ion-label>\n  <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n\n\n <div class="spacer" style="height:20px;"></div>\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>En donde deseas el servicio?</div>\n</div>\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/joel/lima/src/pages/cuando/cuando.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CuandoPage);
    return CuandoPage;
}());

//# sourceMappingURL=cuando.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_historial_historial__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(storage, navCtrl, navParams) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__pages_historial_historial__["a" /* HistorialPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.salir = function () {
        this.storage.remove('token');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/joel/lima/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Historial" tabIcon="keypad" ></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/joel/lima/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reserva_reserva__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_venta_venta__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alerta_alerta__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pago_pago__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ubicacion_ubicacion__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_servicio_servicio__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detalleservicio_detalleservicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ayuda_ayuda__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_registrosocia_registrosocia__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_historial_historial__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_historialsocia_historialsocia__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_registroprincipal_registroprincipal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_loginprincipal_loginprincipal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_categorias_categorias__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_mytabs_mytabs__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_mytabsnologin_mytabsnologin__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_mytabssocia_mytabssocia__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_google_maps__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_categorias_categorias__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_map_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_spinner_spinner__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_servicios_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_perfil_perfil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_onesignal__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_servicio_servicio__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_notificacion_notificacion__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































var storage = new __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["b" /* Storage */]({});
function getAuthHttp(http) {
    return new __WEBPACK_IMPORTED_MODULE_31_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_31_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'Bearer',
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('token').then(function (token) { return token; }); }),
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registrosocia_registrosocia__["a" /* RegistrosociaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_servicio_servicio__["a" /* ServicioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_alerta_alerta__["a" /* AlertaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pago_pago__["a" /* PagoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ubicacion_ubicacion__["a" /* UbicacionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_categorias_categorias__["a" /* CategoriasComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_mytabs_mytabs__["a" /* MytabsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_mytabssocia_mytabssocia__["a" /* MytabssociaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_mytabsnologin_mytabsnologin__["a" /* MytabsnologinComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alerta/alerta.module#AlertaPageModule', name: 'AlertaPage', segment: 'alerta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuando/cuando.module#CuandoPageModule', name: 'CuandoPage', segment: 'cuando', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalleservicio/detalleservicio.module#DetalleservicioPageModule', name: 'DetalleservicioPage', segment: 'detalleservicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historialsocia/historialsocia.module#HistorialsociaPageModule', name: 'HistorialsociaPage', segment: 'historialsocia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginprincipal/loginprincipal.module#LoginprincipalPageModule', name: 'LoginprincipalPage', segment: 'loginprincipal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pago/pago.module#PagoPageModule', name: 'PagoPage', segment: 'pago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registroprincipal/registroprincipal.module#RegistroprincipalPageModule', name: 'RegistroprincipalPage', segment: 'registroprincipal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrosocia/registrosocia.module#RegistrosociaPageModule', name: 'RegistrosociaPage', segment: 'registrosocia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicio/servicio.module#ServicioPageModule', name: 'ServicioPage', segment: 'servicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/venta/venta.module#VentaPageModule', name: 'VentaPage', segment: 'venta', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_alerta_alerta__["a" /* AlertaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ubicacion_ubicacion__["a" /* UbicacionPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_servicio_servicio__["a" /* ServicioPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pago_pago__["a" /* PagoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registrosocia_registrosocia__["a" /* RegistrosociaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ayuda_ayuda__["a" /* AyudaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_onesignal__["a" /* OneSignal */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_31_angular2_jwt__["AuthHttp"],
                    useFactory: getAuthHttp,
                    deps: [__WEBPACK_IMPORTED_MODULE_32__angular_http__["Http"]]
                },
                __WEBPACK_IMPORTED_MODULE_36__providers_categorias_categorias__["a" /* CategoriasProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_map_map__["a" /* MapProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_servicios_servicios__["a" /* ServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_perfil_perfil__["a" /* PerfilProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_servicio_servicio__["a" /* ServicioProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_notificacion_notificacion__["a" /* NotificacionProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PerfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PerfilProvider = (function () {
    function PerfilProvider(authHttp, _http) {
        this.authHttp = authHttp;
        this._http = _http;
        console.log('Hello PerfilProvider Provider');
    }
    PerfilProvider.prototype.miperfil = function () {
        return this.authHttp.get('http://104.236.247.3:8000/miperfil/')
            .map(function (response) { return response.json(); });
    };
    PerfilProvider.prototype.getperfil = function () {
        return this.authHttp.get('http://104.236.247.3:8000/miperfil/').map(function (res) {
            return res.json();
        });
    };
    PerfilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PerfilProvider);
    return PerfilProvider;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venta_venta__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_perfil_perfil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_servicio_servicio__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__historial_historial__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ayuda_ayuda__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loginprincipal_loginprincipal__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var IntroPage = (function () {
    function IntroPage(platform, modalCtrl, socialSharing, storage, _perfil, _categoria, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this._perfil = _perfil;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000/';
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__["a" /* PerfilPage */];
        this.introPage = IntroPage_1;
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_8__pages_servicio_servicio__["a" /* ServicioPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_9__historial_historial__["a" /* HistorialPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */];
        this.loginprincipalPage = __WEBPACK_IMPORTED_MODULE_12__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */];
        this.ventaPage = __WEBPACK_IMPORTED_MODULE_4__venta_venta__["a" /* VentaPage */];
        this.ayudaPage = __WEBPACK_IMPORTED_MODULE_11__ayuda_ayuda__["a" /* AyudaPage */];
    }
    IntroPage_1 = IntroPage;
    IntroPage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */], { userId: 8675309 });
        profileModal.present();
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('intro page-intro....', 'ionViewDidLoad');
    };
    IntroPage.prototype.ionViewWillEnter = function () {
        // this.storage.get('grupo').then((val) => {
        //                        console.log('Historiamskksls',val)
        //                        if(val=='Socia'){
        //                          this.navCtrl.push(HistorialsociaPage);
        //                        }
        //                      });
    };
    IntroPage.prototype.iraventas = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__venta_venta__["a" /* VentaPage */], {
            categoria: data,
        });
    };
    IntroPage.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    IntroPage = IntroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/joel/lima/src/pages/intro/intro.html"*/'\n<ion-content>\n\n	<categoriaspue></categoriaspue>\n\n\n<div style=\'margin-top:-2px;\'>\n<div  *ngFor = \'let c of categoria\' (click)=\'iraventas(c)\' >\n\n\n\n      <a style="display:block;" >\n        <img src="{{host}}{{c.photo}}"  style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;">\n     \n         <!-- <div class=\'cat\'>{{c.nombre}}</div> -->\n\n\n\n      </a>\n\n     \n\n<div style="height:2px;"></div>\n\n </div>\n\n </div>\n\n<div style=\'height: 50px\'></div>\n\n</ion-content>\n\n\n<mytabs></mytabs>\n'/*ion-inline-end:"/home/joel/lima/src/pages/intro/intro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
    var IntroPage_1;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detalleservicio_detalleservicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alerta_alerta__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historialsocia_historialsocia__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_onesignal__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_perfil_perfil__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(_perfil, storage, alertCtrl, authHttp, appCtrl, platform, oneSignal, statusBar, splashScreen) {
        var _this = this;
        this._perfil = _perfil;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.authHttp = authHttp;
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */];
        this.url = 'http://104.236.247.3:8000';
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.handlerNotifications();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] }
        ];
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.storage.get('grupo').then(function (val) {
                    if (val == 'Socia') {
                        _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */]);
                        //this.appCtrl.getRootNav().push(DetalleservicioPage, { servicio: 120 })
                    }
                    else {
                        _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */]);
                    }
                });
            }
        });
    }
    MyApp.prototype.ionViewWillEnter = function () {
        console.log('App components.', 'ionViewWillEnter');
    };
    MyApp.prototype.handlerNotifications = function () {
        var _this = this;
        this.oneSignal.startInit('6d06ccb5-60c3-4a76-83d5-9363fbf6b40a', '466431784640');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened()
            .subscribe(function (jsonData) {
            if (jsonData.notification.payload.additionalData.servicio) {
                // let alert = this.alertCtrl.create({
                //   title: 'Tienes un nuevo servicio',
                //   subTitle: 'Codigo: '+jsonData.notification.payload.additionalData.servicio,
                //   buttons: ['OK']
                // });
                // alert.present();
                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__pages_alerta_alerta__["a" /* AlertaPage */], { servicio: jsonData.notification.payload.additionalData.servicio });
            }
            if (jsonData.notification.payload.additionalData.aceptaservicio) {
                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */], { servicio: jsonData.notification.payload.additionalData.aceptaservicio });
            }
            if (jsonData.notification.payload.additionalData.codigo) {
                var code = _this.alertCtrl.create({
                    title: 'No te olvide de My Look Xpress',
                    subTitle: 'Buenas tardes',
                    buttons: ['OK']
                });
                code.present();
                var creds = JSON.stringify(jsonData);
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({
                    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
                });
                _this.authHttp.post('http://104.236.247.3:8000/guardanotificacion/', creds, options)
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        this.oneSignal.endInit();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/joel/lima/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/joel/lima/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

////
// Add the following to your existing ready fuction.
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_portada_portada__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CategoriasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CategoriasComponent = (function () {
    function CategoriasComponent(_photo) {
        var _this = this;
        this._photo = _photo;
        this.host = 'http://104.236.247.3:8000/';
        this._photo.getfotosdeportada()
            .subscribe(function (data) {
            _this.photo1 = data[0].photo;
            _this.photo2 = data[1].photo;
            _this.photo3 = data[2].photo;
            _this.photo4 = data[3].photo;
        });
    }
    // ngAfterViewInit() {
    //   this.slides.autoplay = true;
    // }
    CategoriasComponent.prototype.ionViewDidLoad = function () {
        //setTimeout(()=>this.slides.startAutoplay())
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */])
    ], CategoriasComponent.prototype, "slides", void 0);
    CategoriasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'categoriaspue',template:/*ion-inline-start:"/home/joel/lima/src/components/categorias/categorias.html"*/'\n\n<ion-slides autoplay="2000"  speed="5000">\n  <ion-slide>\n    <img src="{{host}}{{photo1}}" alt="">\n  </ion-slide>\n  <ion-slide>\n    <img src="{{host}}{{photo2}}" alt="">\n  </ion-slide>\n  <ion-slide>\n    <img src="{{host}}{{photo3}}" alt="">\n  </ion-slide>\n\n  <ion-slide>\n    <img src="{{host}}{{photo4}}" alt="">\n  </ion-slide>\n\n    <ion-slide>\n    <img src="{{host}}{{photo4}}" alt="">\n  </ion-slide>\n\n  \n</ion-slides>'/*ion-inline-end:"/home/joel/lima/src/components/categorias/categorias.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_portada_portada__["a" /* PortadaProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_portada_portada__["a" /* PortadaProvider */]])
    ], CategoriasComponent);
    return CategoriasComponent;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortadaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortadaProvider = (function () {
    function PortadaProvider(_http) {
        this._http = _http;
        console.log('Hello PortadaProvider Provider');
    }
    PortadaProvider.prototype.getfotosdeportada = function () {
        return this._http.get('http://104.236.247.3:8000/portadaphoto')
            .map(function (response) { return response.json(); });
    };
    PortadaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]])
    ], PortadaProvider);
    return PortadaProvider;
}());

//# sourceMappingURL=portada.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loginprincipal_loginprincipal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_servicio_servicio__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_historial_historial__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the MytabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MytabsComponent = (function () {
    function MytabsComponent(socialSharing, platform, appCtrl, storage, navCtrl, navParams) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myVar = true;
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */];
        this.introPage = __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */];
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_6__pages_servicio_servicio__["a" /* ServicioPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_8__pages_historial_historial__["a" /* HistorialPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.storage.get('token').then(function (val) {
            console.log('Token....', val);
            _this.logeado = val;
            if (_this.logeado == null) {
                _this.nologeado = true;
                _this.logeado = null;
            }
            if (_this.logeado) {
                _this.logeado = true;
                _this.nologeado = null;
            }
        });
    }
    MytabsComponent.prototype.loginprincipal = function () {
        console.log('queeeee');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */]);
    };
    MytabsComponent.prototype.ayuda = function () {
        console.log('queeeee');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__["a" /* AyudaPage */]);
    };
    MytabsComponent.prototype.ionViewDidLoad = function () {
        console.log('Entro......');
    };
    MytabsComponent.prototype.ionViewWillEnter = function () {
        console.log('Entro..wwww....');
    };
    MytabsComponent.prototype.salircliente = function () {
        console.log('saliendo..');
        this.storage.remove('token');
        this.storage.remove('grupo');
        //this.navCtrl.push(IntroPage);
        this.platform.exitApp();
    };
    MytabsComponent.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    MytabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mytabs',template:/*ion-inline-start:"/home/joel/lima/src/components/mytabs/mytabs.html"*/'Logeado...<h1>{{logeado}}</h1>\n\n<div  class="fixed44" *ngIf="logeado">\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n      <label [navPush]="introPage"  for="tab1"><ion-icon name="home"></ion-icon>\n      <span>Home</span></label>\n\n \n\n      <input id="tab2" type="radio" name="tabs" (click)=\'perfil()\'>\n      <label [navPush]="perfilPage" for="tab2" ><ion-icon name="person"></ion-icon><span>Perfil</span></label>\n\n      <input id="tab3" type="radio" name="tabs" (click)=\'historial()\'>\n      <label [navPush]="historialPage" for="tab3"><ion-icon name="keypad"></ion-icon><span>Servicios</span></label>\n\n       <input (click)=\'salircliente()\' id="tab4" type="radio" name="tabs" >\n      <label   for="tab4"><ion-icon name="log-out"></ion-icon><span>Salir</span></label>\n\n\n\n</div>\n\n</div>\n\n<div  class="fixed44" *ngIf="nologeado">\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n      <label [navPush]="introPage"  for="tab1"><ion-icon name="home"></ion-icon>\n      <span>Home</span></label>\n\n \n\n      <input id="tab2" type="radio" name="tabs" >\n      <label (click)="ayuda()" for="tab2" ><ion-icon name="help"></ion-icon><span>Ayuda</span></label>\n\n      <input id="tab3" type="radio" name="tabs" >\n      <label (click)="shareSheetShare()" for="tab3"><ion-icon name="share"></ion-icon><span>Compartir</span></label>\n\n       <input id="tab4" type="radio" name="tabs" >\n      <label  (click)="loginprincipal()" for="tab4"><ion-icon name="log-in"></ion-icon><span>Ingresar</span></label>\n\n\n\n</div>\n\n</div>\n'/*ion-inline-end:"/home/joel/lima/src/components/mytabs/mytabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MytabsComponent);
    return MytabsComponent;
}());

//# sourceMappingURL=mytabs.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytabsnologinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_loginprincipal_loginprincipal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_servicio_servicio__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ayuda_ayuda__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notificacion_notificacion__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MytabsnologinComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MytabsnologinComponent = (function () {
    function MytabsnologinComponent(_notificacion, appCtrl, storage, navCtrl, navParams, socialSharing) {
        var _this = this;
        this._notificacion = _notificacion;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.myVar = true;
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_3__pages_servicio_servicio__["a" /* ServicioPage */];
        this.ayudaPage = __WEBPACK_IMPORTED_MODULE_4__pages_ayuda_ayuda__["a" /* AyudaPage */];
        this.loginprincipalPage = __WEBPACK_IMPORTED_MODULE_2__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */];
        this.storage.get('token').then(function (val) {
            console.log('Token....', val);
            _this.logeado = val;
            if (_this.logeado == null) {
                _this.nologeado = true;
            }
            if (_this.logeado) {
                _this.logeado = true;
            }
        });
    }
    MytabsnologinComponent.prototype.loginprincipal = function () {
        console.log('queeeee');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */]);
    };
    MytabsnologinComponent.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    MytabsnologinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mytabsnologin',template:/*ion-inline-start:"/home/joel/lima/src/components/mytabsnologin/mytabsnologin.html"*/'<div  class="fixed44" *ngIf="nologeado">\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n      <label [navPush]="introPage"  for="tab1"><ion-icon name="home"></ion-icon>\n      <span>Home</span></label>\n\n \n\n      <input id="tab2" type="radio" name="tabs" >\n      <label [navPush]="ayudaPage" for="tab2" ><ion-icon name="help"></ion-icon><span>Ayuda</span></label>\n\n      <input id="tab3" type="radio" name="tabs" >\n      <label (click)="shareSheetShare()" for="tab3"><ion-icon name="share"></ion-icon><span>Compartir</span></label>\n\n       <input id="tab4" type="radio" name="tabs" >\n      <label  (click)="loginprincipal()" for="tab4"><ion-icon name="log-in"></ion-icon><span>Ingresar</span></label>\n\n\n\n</div>\n\n</div>\n'/*ion-inline-end:"/home/joel/lima/src/components/mytabsnologin/mytabsnologin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_notificacion_notificacion__["a" /* NotificacionProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_notificacion_notificacion__["a" /* NotificacionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MytabsnologinComponent);
    return MytabsnologinComponent;
}());

//# sourceMappingURL=mytabsnologin.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytabssociaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_servicio_servicio__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historial_historial__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_historialsocia_historialsocia__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MytabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MytabssociaComponent = (function () {
    function MytabssociaComponent(platform, storage, navCtrl, navParams) {
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myVar = true;
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */];
        this.introPage = __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */];
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_5__pages_servicio_servicio__["a" /* ServicioPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_6__pages_historial_historial__["a" /* HistorialPage */];
        this.historialsociaPage = __WEBPACK_IMPORTED_MODULE_7__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
    }
    MytabssociaComponent.prototype.salir = function () {
        this.storage.remove('token');
        this.storage.remove('grupo');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */]);
        this.platform.exitApp();
    };
    MytabssociaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mytabssocia',template:/*ion-inline-start:"/home/joel/lima/src/components/mytabssocia/mytabssocia.html"*/'<div  class="fixed44" >\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n\n \n\n      <input id="tab2" type="radio" name="tabs" (click)=\'perfil()\'>\n      <label [navPush]="perfilPage" for="tab2" ><ion-icon name="person"></ion-icon><span>Perfil</span></label>\n\n      <input id="tab3" type="radio" name="tabs" (click)=\'historial()\'>\n      <label [navPush]="historialsociaPage" for="tab3"><ion-icon name="keypad"></ion-icon><span>Servicios</span></label>\n\n       <input (click)=\'salir()\' id="tab4" type="radio" name="tabs" >\n      <label for="tab4"><ion-icon name="log-out"></ion-icon><span>Salir</span></label>\n\n\n\n</div>\n\n</div>\n'/*ion-inline-end:"/home/joel/lima/src/components/mytabssocia/mytabssocia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MytabssociaComponent);
    return MytabssociaComponent;
}());

//# sourceMappingURL=mytabssocia.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicioProvider = (function () {
    function ServicioProvider(http) {
        this.http = http;
        console.log('Hello ServicioProvider Provider');
    }
    ServicioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicioProvider);
    return ServicioProvider;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicioPage = (function () {
    function ServicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicioPage');
    };
    ServicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-servicio',template:/*ion-inline-start:"/home/joel/lima/src/pages/servicio/servicio.html"*/'<!--\n  Generated template for the ServicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tu pedido </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card-content>\n\n<img src="/assets/imgs/woman.svg">\n  </ion-card-content>\n\n\n\n<p style="line-height: 30px;color:white;\n">Felicitaciones Carlos, en estos momentos nuestros robots estan buscando una estilista perfecta para ti, en breves instantes recibiras una notificacion donde detalla nuestra socia que te atendera en el lugar donde nos indicastes,</p>\n\n<p style="line-height: 30px;color:white;\n">Paciencia porfavor </p>\n\n<p style="line-height: 30px;color:white;\n">Tu codigo de pedido es 12121</p>\n\n <button ion-button block round color="dark"  [navPush]="reservaPage" >Cancelar pedido</button>\n\n\n\n\n</ion-content>\n\n\n<mytabs></mytabs>\n'/*ion-inline-end:"/home/joel/lima/src/pages/servicio/servicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ServicioPage);
    return ServicioPage;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registro_registro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_historialsocia_historialsocia__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_perfil_perfil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

var LoginPage = (function () {
    function LoginPage(alertCtrl, view, _perfil, appCtrl, http, authHttp, storage) {
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._perfil = _perfil;
        this.appCtrl = appCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.model = new User(null, null);
        console.log('Login Page....');
        this.registroPage = __WEBPACK_IMPORTED_MODULE_6__pages_registro_registro__["a" /* RegistroPage */];
    }
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.authenticate = function (username, password) {
        var _this = this;
        console.log('ingresando...');
        var creds = JSON.stringify({ username: username, password: password });
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        // sleep time expects milliseconds
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
            .subscribe(function (data) {
            console.log('status', data.status);
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            if (data.status == 200) {
                _this.view.dismiss();
                console.log('Redirigiendo...');
                sleep(200).then(function () {
                    // Do something after the sleep!
                    _this._perfil.miperfil()
                        .subscribe(function (reference) {
                        return _this.storage.set('grupo', reference[0]['user__groups__name']);
                    });
                    _this.storage.get('grupo').then(function (val) {
                        if (val == 'Socia') {
                            _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */]);
                        }
                        else {
                            _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */]);
                        }
                    });
                });
            }
            console.log('jwtHelper', JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)));
        }, function (error) {
            _this.nologin();
        });
    };
    LoginPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* Nav */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/joel/lima/src/pages/login/login.html"*/'\n\n\n<ion-content>\n\n\n<ion-navbar>\n  \n  <ion-title></ion-title>\n\n  <ion-buttons>\n      \n      <button ion-button (click)=\'closeModal()\'>Cerrar</button>\n\n  </ion-buttons>\n\n</ion-navbar>\n\n<div padding>\n    <div style="padding-top:10%"  center>\n\n      <ion-list inset>\n  <form #loginForm="ngForm" (ngSubmit)="authenticate(model.username,model.password)" autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input placeholder="Email" name="username" id="loginField" type="text" required [(ngModel)] = "model.username" #email></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Password" name="password" id="passwordField" type="password" required [(ngModel)] = "model.password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n\n\n        <button  round ion-button class="submit-btn" color=\'dark\' full type="submit" [disabled]="!loginForm.form.valid">Ingresar\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n <button  round ion-button  color=\'dark\' full [navPush]="registroPage">Registrate\n        </button>\n\n          <p style=\'color:#fff;\'>Version 0.1.9</p>\n\n      </ion-list>\n\n\n    \n\n      \n    </div>\n\n\n</div>\n</ion-content>'/*ion-inline-end:"/home/joel/lima/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_8__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detalleservicio_detalleservicio__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialPage = (function () {
    function HistorialPage(_servicio, navCtrl, navParams) {
        var _this = this;
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000';
        this._servicio.getservicios()
            .subscribe(function (data) { return _this.servicios = data; });
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialPage');
    };
    HistorialPage.prototype.iradetalle = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */], {
            servicio: data.id,
        });
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historial',template:/*ion-inline-start:"/home/joel/lima/src/pages/historial/historial.html"*/'<!--\n  Generated template for the HistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tus reservas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n  <ion-item-sliding>\n    \n    <ion-item *ngFor="let item of servicios" >\n      <ion-avatar item-start>\n        <img src="{{host}}/{{item.socia__photo}}">\n      </ion-avatar>\n\n\n      <div class="row" (click)=\'iradetalle(item)\'>\n      <div class="col"> <h2>{{item.id}} {{item.socia__nombre}} </h2></div>\n      <div class="col">\n        \n          <span style="font-size: 13px;\n   \n    "><ion-icon name="calendar"></ion-icon> {{item.fecha}} {{item.fecha_inicio}}</span>\n\n      </div>\n      </div>\n    \n    </ion-item>\n \n  </ion-item-sliding>\n\n\n\n\n</ion-content>\n\n<mytabs></mytabs>'/*ion-inline-end:"/home/joel/lima/src/pages/historial/historial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialsociaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_alerta_alerta__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistorialsociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialsociaPage = (function () {
    function HistorialsociaPage(_servicio, navCtrl, navParams) {
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistorialsociaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HistorialsociaPage');
        this._servicio.serviciosdesocias()
            .subscribe(function (data) { return _this.servicios = data; });
    };
    HistorialsociaPage.prototype.iradetalle = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_alerta_alerta__["a" /* AlertaPage */], {
            servicio: data.id,
        });
    };
    HistorialsociaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historialsocia',template:/*ion-inline-start:"/home/joel/lima/src/pages/historialsocia/historialsocia.html"*/'<!--\n  Generated template for the HistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content >\n\n\n\n  <ion-item-sliding>\n    \n    <ion-item *ngFor="let item of servicios" >\n      <ion-avatar item-start>\n        <img src="{{host}}/{{item.socia__photo}}">\n      </ion-avatar>\n\n\n      <div class="row" (click)=\'iradetalle(item)\'>\n      <div class="col"> <h2>{{item.id}} {{item.socia__nombre}} </h2></div>\n      <div class="col">\n        \n          <span style="font-size: 13px;\n   \n    "><ion-icon name="calendar"></ion-icon> {{item.fecha}} {{item.fecha_inicio}}</span>\n\n      </div>\n      </div>\n    \n    </ion-item>\n \n  </ion-item-sliding>\n\n\n\n\n</ion-content>\n\n<mytabssocia></mytabssocia>'/*ion-inline-end:"/home/joel/lima/src/pages/historialsocia/historialsocia.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HistorialsociaPage);
    return HistorialsociaPage;
}());

//# sourceMappingURL=historialsocia.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_perfil_perfil__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, _perfil, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._perfil = _perfil;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000';
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.email = data[0]['email'];
            _this.telefono = data[0]['telefono'];
            _this.photo = data[0]['photo'];
            _this.user_grupo = data[0]['user__groups__name'];
            _this.nombre = data[0]['nombre'];
            _this.correo = data[0]['email'];
            _this.telefono = data[0]['telefono'];
        });
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/joel/lima/src/pages/perfil/perfil.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<div class="spacer">\n  \n\n\n</div>\n\n  <div class=\'perfil\'>\n\n  <img  *ngIf=\'photo\'  src="http://estokealo.com:8000/{{photo}}" style=\'border-radius: 50%; clear: left;border: 2px solid #fff;\'>\n\n  <img  *ngIf=\'!photo\'  src="http://www.gravatar.com/avatar/f792ce8da677f74a86b1edb6304d6d0b?s=400&r=g&d=http%3A%2F%2Farqa.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fnew-mistery.png" style=\'border-radius: 50%; clear: left;\'>\n\n  {{grupo}}\n  </div>\n\n      <!-- <div class="profile-menu">\n        <img src="{{host}}/{{photo}}" style="display: block; width: 60%; height: auto; margin-left: auto; margin-right: auto;">\n      </div> -->\n    \n\n\n\n<ion-list padding>\n\n  <ion-item>\n    <ion-label fixed>Nombre</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="nombre"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Grupo</ion-label>\n    <ion-input type="text" [(ngModel)]="user_grupo"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-label fixed>Telefono</ion-label>\n    <ion-input type="text" [(ngModel)]="telefono"></ion-input>\n  </ion-item>\n\n\n</ion-list>\n\n<button ion-button full round color="dark">Guardar</button>\n\n\n\n\n\n\n\n</ion-content>\n\n\n<mytabs></mytabs>\n'/*ion-inline-end:"/home/joel/lima/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciosProvider = (function () {
    function ServiciosProvider(authHttp, _http) {
        this.authHttp = authHttp;
        this._http = _http;
        console.log('Hello ServiciosProvider Provider');
    }
    ServiciosProvider.prototype.getservicios = function () {
        return this.authHttp.get('http://104.236.247.3:8000/miservicios/')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.detalleservicio = function (id_servicio) {
        return this.authHttp.get('http://104.236.247.3:8000/detalleservicio/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.ultimoservicio = function () {
        return this.authHttp.get('http://104.236.247.3:8000/ultimoservicio/')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.serviciosdesocias = function () {
        return this.authHttp.get('http://104.236.247.3:8000/miserviciossocias/2')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServiciosProvider);
    return ServiciosProvider;
}());

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AyudaPage = (function () {
    function AyudaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AyudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyudaPage');
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ayuda',template:/*ion-inline-start:"/home/joel/lima/src/pages/ayuda/ayuda.html"*/'<!--\n  Generated template for the AyudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ayuda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/joel/lima/src/pages/ayuda/ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pago_pago__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicio_servicio__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservaPage = (function () {
    function ReservaPage(modalCtrl, appCtrl, authHttp, storage, http, navCtrl, navParams, googleMaps) {
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.authHttp = authHttp;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.API_URL = 'http://104.236.247.3:8000';
    }
    ReservaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('pedido').then(function (val) {
            _this.pedidos = val;
        });
        this.storage.get('ubicacion').then(function (val) {
            _this.ubicacion = val;
        });
        this.storage.get('precio').then(function (val) {
            _this.precio = val;
        });
        this.storage.get('dia').then(function (val) {
            _this.dia = val;
        });
        this.storage.get('hora').then(function (val) {
            _this.hora = val;
        });
        this.storage.get('referencia').then(function (val) {
            _this.referencia = val;
        });
    };
    ReservaPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pago_pago__["a" /* PagoPage */], { userId: 8675309 });
        profileModal.present();
    };
    ReservaPage.prototype.pagar = function () {
        this.presentProfileModal();
    };
    ReservaPage.prototype.quitacarrito = function (data) {
        console.log('jsjs', data);
        var index = this.pedidos.indexOf(data);
        if (index !== -1) {
            console.log('isisi', this.pedidos[index]);
            this.precio = this.precio - this.pedidos[index].precio;
            this.pedidos.splice(index, 1);
        }
    };
    ReservaPage.prototype.confirma = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            console.log('token', val);
            if (val == null) {
                console.log('nullll');
                _this.presentProfileModal();
            }
            else {
                var myHeader = new Headers();
                myHeader.append('Content-Type', 'application/json');
                _this.data = {
                    'pedido': _this.pedidos,
                    'ubicacion': _this.ubicacion,
                    'dia': _this.dia,
                    'hora': _this.hora,
                    'referencia': _this.referencia
                };
                _this.authHttp.post(_this.API_URL + '/buscasocia/1', _this.data)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__servicio_servicio__["a" /* ServicioPage */]);
                });
            }
        });
    };
    ReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reserva',template:/*ion-inline-start:"/home/joel/lima/src/pages/reserva/reserva.html"*/'\n\n<!-- <ion-nav [root]="rootPage"></ion-nav>\n\n -->\n\n<!-- 	<ion-list style=\'margin-top: 72px;\n    padding: 15px;\'>\n\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>Que dia y aque hora quieres el servicio?</div>\n</div>\n\n  <ion-item>\n  <ion-label>Date</ion-label>\n  <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n\n\n <div class="spacer" style="height:20px;"></div>\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>En donde deseas el servicio?</div>\n</div>\n\n\n</ion-list> -->\n\n\n <ion-header>\n\n  <ion-navbar color="white">\n    <ion-title>Resumen de tu pedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n<ion-list>\n  <ion-item ion-item *ngFor="let item of pedidos">\n\n    <ion-icon name="ios-remove-circle-outline" style=\'padding-right: 4px;\' [hidden]="!item.muestradescripcion" (click)=\'item.muestradescripcion=false\'></ion-icon>\n\n     <ion-icon name="ios-add-circle-outline" style=\'padding-right: 4px;\' [hidden]="item.muestradescripcion" (click)=\'item.muestradescripcion=true\'></ion-icon>\n\n\n\n\n       {{item.nombre}} \n\n       <span style=\'float: right;\n    margin-right: -2px;\n    position: absolute;\n    right: 48px;\'>S/. {{item.precio}}</span> \n     <ion-icon style=\'float:right;font-size: 21px;\' name="trash"  (click)=\'quitacarrito(item)\'></ion-icon>\n    \n      <p [hidden]="!item.muestradescripcion"  class=\'detallesubcategoria\'> {{item.descripcion}}</p>\n\n\n\n  </ion-item>\n\n\n\n</ion-list>\n\n\n<ion-list >\n  <button ion-item>\n   Total a pagar S/. <span style=\'float: right;\n    margin-right: -2px;\n    position: absolute;\n    right: 48px;\'>S/. {{precio}}</span>\n  </button> \n</ion-list>\n\n<ion-list >\n  <button ion-item>\n   \n   Fecha: \n\n   <span style=\'float: right;\n    margin-right: -2px;\n    position: absolute;\n    right: 48px;\'>{{dia}} </span>\n  </button> \n</ion-list>\n\n<ion-list >\n  <button ion-item>\n   \n   Hora: \n\n   <span style=\'float: right;\n    margin-right: -2px;\n    position: absolute;\n    right: 48px;\'> {{hora}}</span>\n  </button> \n</ion-list>\n\n<ion-list >\n  <button ion-item>\n   \n   Direccion: \n\n   <span style=\'float: right;\n    margin-right: -2px;\n    position: absolute;\n    right: 48px;\'> {{referencia}}</span>\n  </button> \n</ion-list>\n\n\n\n<ion-list padding>\n<button block ion-button color="dark" round (click)=\'confirma()\'>Confirmar pedido</button>\n\n\n<button block ion-button color="white" round (click)=\'pagar()\'>Pagar</button>\n</ion-list>\n\n\n\n\n\n</ion-content> \n \n \n<mytabs></mytabs>\n'/*ion-inline-end:"/home/joel/lima/src/pages/reserva/reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], ReservaPage);
    return ReservaPage;
}());

//# sourceMappingURL=reserva.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrosociaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categorias_categorias__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistrosociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrosociaPage = (function () {
    function RegistrosociaPage(http, _categoria, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this._categoria = _categoria;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.pedido = new Array();
        this.todo = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nombre: [''],
            password: [''],
            telefono: [''],
            direccion: ['']
        });
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
    }
    RegistrosociaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrosociaPage');
    };
    RegistrosociaPage.prototype.agregacarrito = function (data) {
        this.pedido.push(data);
        console.log('pedido', this.pedido);
    };
    RegistrosociaPage.prototype.quitacarrito = function (data) {
        var index = this.pedido.indexOf(data);
        if (index !== -1) {
            this.pedido.splice(index, 1);
        }
    };
    RegistrosociaPage.prototype.enviasocia = function (data) {
        var creds = JSON.stringify({ categoria: this.pedido, socia: data });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post('http://104.236.247.3:8000/nuevasocia/', creds, options)
            .subscribe(function (data) {
        });
    };
    RegistrosociaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registrosocia',template:/*ion-inline-start:"/home/joel/lima/src/pages/registrosocia/registrosocia.html"*/'<!--\n  Generated template for the RegistrosociaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Conviertete en Socia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n <form (ngSubmit)="enviasocia(user)" [formGroup]="todo">\n\n \n\n      <ion-item>\n            <ion-input placeholder="Nombre" formControlName="nombre"  name=\'nombre\' id="loginField" type="text" required [(ngModel)] = "user.nombre"></ion-input>\n      </ion-item>\n\n \n      <ion-item>\n            <ion-input placeholder="Email"  formControlName="email"  name=\'email\' id="loginField" type="eaail" required [(ngModel)] = "user.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n            <ion-input placeholder="Telefono"  formControlName="telefono"  name=\'telefono\' id="loginField" type="number" required [(ngModel)] = "user.telefono"></ion-input>\n      </ion-item>\n\n\n       <ion-item>\n            <ion-input placeholder="Direccion"  formControlName="direccion"  name=\'direccion\' id="loginField" type="text" required [(ngModel)] = "user.direccion"></ion-input>\n      </ion-item>\n\n     \n\n\n\n       <ion-item ion-item *ngFor="let item of categoria">\n\n\n\n       {{item.nombre}} \n\n\n     <ion-icon style=\'float:right;font-size: 27px;\' *ngIf="!item.check" name="ios-checkmark-circle-outline"  (click)=\'agregacarrito(item);item.check=true\'></ion-icon>\n     <ion-icon  style=\'float:right;font-size: 27px;\' *ngIf="item.check" name="ios-checkmark-circle"  (click)=\'quitacarrito(item);item.check=false\'></ion-icon> \n\n      <p [hidden]="!item.muestradescripcion"  class=\'detallesubcategoria\'> {{item.descripcion}}</p>\n\n\n\n  </ion-item>\n\n     \n    \n\n<!--       <ion-item>\n            <ion-input placeholder="Telefono" formControlName="password" name="password" id="loginField" type="text" required [(ngModel)] = "user.password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n            <ion-input placeholder="Telefono" formControlName="password" name="password" id="loginField" type="text" required [(ngModel)] = "user.password"></ion-input>\n      </ion-item>\n\n -->\n\n\n\n      <button round ion-button type="submit" color=\'dark\' block [disabled]="!todo.valid">Enviar</button>\n    </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/joel/lima/src/pages/registrosocia/registrosocia.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_categorias_categorias__["a" /* CategoriasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], RegistrosociaPage);
    return RegistrosociaPage;
}());

//# sourceMappingURL=registrosocia.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginprincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historialsocia_historialsocia__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registroprincipal_registroprincipal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registrosocia_registrosocia__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

var LoginprincipalPage = (function () {
    function LoginprincipalPage(navCtrl, alertCtrl, view, _perfil, appCtrl, http, authHttp, storage) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._perfil = _perfil;
        this.appCtrl = appCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.model = new User(null, null);
        this.registroprincipalPage = __WEBPACK_IMPORTED_MODULE_10__registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */];
        this.registrosociaPage = __WEBPACK_IMPORTED_MODULE_11__registrosocia_registrosocia__["a" /* RegistrosociaPage */];
    }
    LoginprincipalPage.prototype.ionViewWillEnter = function () {
        console.log('loginprincipal,ionViewWillEnter');
    };
    LoginprincipalPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginprincipalPage.prototype.authenticate = function (username, password) {
        var _this = this;
        console.log('ingresando...');
        var creds = JSON.stringify({ username: username, password: password });
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        // sleep time expects milliseconds
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
            .subscribe(function (data) {
            console.log('status', data.status);
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            if (data.status == 200) {
                console.log('Redirigiendo...');
                sleep(200).then(function () {
                    // Do something after the sleep!
                    _this._perfil.miperfil()
                        .subscribe(function (reference) {
                        _this.storage.set('grupo', reference[0]['user__groups__name']);
                        if (reference[0]['user__groups__name'] == 'Socia') {
                            _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */]);
                        }
                        else {
                            _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */]);
                        }
                    });
                });
            }
            console.log('jwtHelper', JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)));
        }, function (error) {
            _this.nologin();
        });
    };
    LoginprincipalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* Nav */])
    ], LoginprincipalPage.prototype, "nav", void 0);
    LoginprincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loginprincipal',template:/*ion-inline-start:"/home/joel/lima/src/pages/loginprincipal/loginprincipal.html"*/'\n\n\n<ion-content>\n\n\n<ion-navbar>\n  \n  <ion-title> </ion-title>\n\n  <ion-buttons>\n      \n      <button ion-button (click)=\'closeModal()\'>Cerrar</button>\n\n  </ion-buttons>\n\n</ion-navbar>\n\n<div padding>\n    <div style="padding-top:10%"  center>\n\n      <ion-list inset>\n  <form #loginForm="ngForm" (ngSubmit)="authenticate(model.username,model.password)" autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input placeholder="Email" name="username" id="loginField" type="text" required [(ngModel)] = "model.username" #email></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Password" name="password" id="passwordField" type="password" required [(ngModel)] = "model.password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n\n\n        <button  round ion-button class="submit-btn" color=\'white\' full type="submit" [disabled]="!loginForm.form.valid">Ingresar\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n <button  round ion-button  color=\'dark\' full [navPush]="registroprincipalPage">Registrate\n        </button>\n\n<!--      <button round ion-button  color=\'dark\' block  [navPush]="registrosociaPage" >Conviertete en socia</button>\n<p style=\'color:#fff;\'>Version 0.1.9</p> -->\n\n         \n      </ion-list>\n\n\n      \n\n \n      \n    </div>\n\n\n</div>\n</ion-content>\n\n\n<mytabs></mytabs>\n'/*ion-inline-end:"/home/joel/lima/src/pages/loginprincipal/loginprincipal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], LoginprincipalPage);
    return LoginprincipalPage;
}());

//# sourceMappingURL=loginprincipal.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SpinnerProvider = (function () {
    function SpinnerProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello SpinnerProvider Provider');
    }
    SpinnerProvider.prototype.load = function () {
        this.loader = this.loadingCtrl.create({
            content: ''
        });
        this.loader.present();
    };
    SpinnerProvider.prototype.dismiss = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MapProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MapProvider = (function () {
    function MapProvider(http) {
        this.http = http;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.google_api_key = 'AIzaSyCopEqGky81dhV56krJ1dqjkqFPKKOpOrI';
        console.log('Hello MapProvider Provider');
    }
    MapProvider.prototype.getAddress = function (params) {
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
        return this.GET(url);
    };
    MapProvider.prototype.getStreetAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
        return this.GET(url);
    };
    MapProvider.prototype.GET = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MapProvider.prototype.POST = function (url, params) {
        // let options = new RequestOptions({
        //   headers: this.contentHeader
        // });
        // return this.http.post(url, params, options).map(res => res.json());
    };
    MapProvider.prototype.DEL = function (url) {
        // let options = new RequestOptions({
        //   headers: this.contentHeader
        // });
        // return this.http.delete(url, options).map(res => res.json());
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategoriasProvider = (function () {
    function CategoriasProvider(_http) {
        this._http = _http;
        console.log('Hello CategoriasProvider Provider');
    }
    CategoriasProvider.prototype.getcategorias = function () {
        return this._http.get('http://104.236.247.3:8000/categoria')
            .map(function (response) { return response.json(); });
    };
    CategoriasProvider.prototype.getsubcategorias = function (categoria) {
        return this._http.get('http://104.236.247.3:8000/subcategoria/' + categoria)
            .map(function (response) { return response.json(); });
    };
    CategoriasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]])
    ], CategoriasProvider);
    return CategoriasProvider;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reserva_reserva__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ubicacion_ubicacion__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaPage = (function () {
    function VentaPage(formBuilder, alertCtrl, storage, _categoria, navCtrl, http, navParams) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.myVar = true;
        this.host = 'http://104.236.247.3:8000/';
        this.book = 0;
        this.precio = 0;
        this.pedido = new Array();
        this.muestradescripcion = true;
        this.todo = this.formBuilder.group({
            experiencia: [''],
            referencia: [''],
            comentario: ['']
        });
        this.reservaPage = __WEBPACK_IMPORTED_MODULE_5__reserva_reserva__["a" /* ReservaPage */];
        this.ubicacionPage = __WEBPACK_IMPORTED_MODULE_6__ubicacion_ubicacion__["a" /* UbicacionPage */];
        this.cate = navParams.get("categoria");
        console.log('cate...', this.cate.id);
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
        this._categoria.getsubcategorias(this.cate.id)
            .subscribe(function (data) {
            return _this.subcategoria = data;
        });
        this._categoria.getsubcategorias(1)
            .subscribe(function (data) {
            return _this.mano = data;
        });
        this._categoria.getsubcategorias(2)
            .subscribe(function (data) { return _this.pies = data; });
        this._categoria.getsubcategorias(3)
            .subscribe(function (data) { return _this.maquillaje = data; });
        this._categoria.getsubcategorias(4)
            .subscribe(function (data) { return _this.podologia = data; });
        this._categoria.getsubcategorias(5)
            .subscribe(function (data) { return _this.masajes = data; });
        this._categoria.getsubcategorias(6)
            .subscribe(function (data) { return _this.manicureninas = data; });
        this._categoria.getsubcategorias(7)
            .subscribe(function (data) { return _this.baber = data; });
        this._categoria.getsubcategorias(8)
            .subscribe(function (data) { return _this.extras = data; });
        this._categoria.getsubcategorias(9)
            .subscribe(function (data) { return _this.cabello = data; });
    }
    VentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentaPage');
    };
    VentaPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: data.nombre,
            subTitle: data.descripcion,
            buttons: ['OK']
        });
        alert.present();
    };
    VentaPage.prototype.traesubcategorias = function (data) {
        console.log(data.id);
        // this._categoria.getsubcategorias(data.id)
        //     .subscribe(data => this.subcategoria = data);
        if (data.id == 1) {
            this.subcategoria = this.mano;
        }
        if (data.id == 2) {
            this.subcategoria = this.pies;
        }
        if (data.id == 3) {
            this.subcategoria = this.maquillaje;
        }
        if (data.id == 4) {
            this.subcategoria = this.podologia;
        }
        if (data.id == 5) {
            this.subcategoria = this.masajes;
        }
        if (data.id == 6) {
            this.subcategoria = this.manicureninas;
        }
        if (data.id == 7) {
            this.subcategoria = this.baber;
        }
        if (data.id == 8) {
            this.subcategoria = this.extras;
        }
        if (data.id == 9) {
            this.subcategoria = this.cabello;
        }
    };
    VentaPage.prototype.agregacarrito = function (data) {
        console.log('indexof', this.pedido.indexOf(data));
        this.pedido.push(data);
        console.log('pedido', this.pedido);
        this.precio = this.precio + data.precio;
        this.book = this.book + 1;
    };
    VentaPage.prototype.quitacarrito = function (data) {
        var index = this.pedido.indexOf(data);
        if (index !== -1) {
            this.pedido.splice(index, 1);
        }
        this.book = this.book - 1;
        this.precio = this.precio - data.precio;
        console.log('pedido', this.pedido);
    };
    VentaPage.prototype.continuar = function () {
        console.log('avanza', this.pedido);
        this.storage.set('pedido', this.pedido);
        this.storage.set('precio', this.precio);
    };
    VentaPage.prototype.reset = function (data) {
        console.log('resetando...', this.categoria);
        for (var i = 0; i < this.categoria.length; i++) {
            this.categoria[i]['check'] = true;
        }
        data.check = false;
    };
    VentaPage.prototype.enviasocia = function (data) {
        var creds = JSON.stringify({ categoria: this.pedido, socia: data });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post('http://104.236.247.3:8000/nuevasocia/', creds, options)
            .subscribe(function (data) {
        });
    };
    VentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-venta',template:/*ion-inline-start:"/home/joel/lima/src/pages/venta/venta.html"*/'<!--\n  Generated template for the VentaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="white">\n\n   <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> </ion-title>\n\n\n<button ion-button full round color="dark" *ngIf=\'book>0\' style=\'background: #000;\n    color: #fff;\' [navPush]="ubicacionPage" (click)=\'continuar()\'>\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      {{book}}\n    </ion-col>\n    <ion-col>Continuar\n    </ion-col>\n\n    <ion-col>S/. {{precio}}\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n     </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n       <ul class="categorias-slider" >\n\n\n          <li *ngFor = \'let c of categoria\' (click)=\'traesubcategorias(c)\'>\n		\n		<div *ngIf=\'c.check==true\' (click)=\'reset(c);\' style="\n    width:75px;\n    height: 61px;\n    padding: 0px;\n    padding-right: 16px;\n    margin-left: 21px;">\n		<img style=\'border-radius: 50%;\' src=\'{{host}}{{c.icono}}\'>\n\n		</div>\n\n      <div *ngIf=\'c.check==false\'   style="\n    width:75px;\n    height: 61px;\n    padding: 0px;\n    padding-right: 16px;\n    margin-left: 21px;">\n    <img style=\'border-radius: 50%;\' src=\'{{host}}{{c.icono_seleccionado}}\'>\n\n    </div>\n\n          <span > {{c.nombre}} </span></li>\n\n\n\n         \n\n          </ul>\n\n\n\n<!-- \n  <ion-card *ngFor="let item of subcategoria">\n    <img src="{{host}}{{item.photo}}">\n    <div class="card-title">{{item.nombre}} </div>\n    <div class="card-subtitle">S/. {{item.precio}}</div>\n  </ion-card> -->\n\n<div style=\'height: 86px\'></div>\n\n<ion-card *ngFor="let item of subcategoria" >\n\n<button ion-button color=\'dark\' style="position:absolute;right:12px;"> S/. {{item.precio}}</button>\n\n\n  <img  (click)=\'showAlert(item)\' src="{{host}}{{item.photo}}"/>\n  <ion-card-content >\n\n<ion-grid style=\'padding: 0px;\'>\n  <ion-row>\n\n    <ion-col col-1 style=\'text-align: right;\'><ion-icon style=\'font-size: 33px;color:#222;\' name="information-circle" (click)=\'showAlert(item)\'></ion-icon></ion-col>\n    <ion-col col-7 style=\'padding-top: 5px;padding-left: 14px;\n\'>{{item.nombre}}</ion-col>\n    \n    <ion-col col-4 style=\'text-align: right;\'>\n\n\n    <button *ngIf="!item.check" (click)=\'agregacarrito(item);item.check=true\' ion-button small round color="white" >Agregar</button>\n\n    <button *ngIf="item.check" (click)=\'quitacarrito(item);item.check=false\' ion-button small round color="dark"  >Quitar</button>\n\n   <!--  <ion-icon style=\'float: right;\n    font-size: 33px;\n    \' *ngIf="!item.check" name="ios-add-circle-outline"  (click)=\'agregacarrito(item);item.check=true\'></ion-icon>\n\n\n     <ion-icon  style=\'float: right;\n    font-size: 33px;\n    \' *ngIf="item.check" name="ios-add-circle"  (click)=\'quitacarrito(item);item.check=false\'></ion-icon>  -->\n\n\n\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n\n\n\n    \n\n    \n     \n  </ion-card-content>\n</ion-card>\n<div style=\'height: 80px\'></div>\n\n<!-- \n\n<ion-list>\n  <ion-item ion-item *ngFor="let item of subcategoria">\n    <ion-thumbnail item-start item-avatar>\n      <img style=\'border-radius: 50%; padding: 3px;\' src="{{host}}{{item.photo}}">\n    </ion-thumbnail>\n    <h2>{{item.nombre}}</h2>\n    <p>S/. {{item.precio}}</p>\n    <ion-icon name="information-circle" (click)=\'showAlert(item)\'></ion-icon>\n\n    \n\n     <ion-icon item-end style=\'float:right;font-size: 27px;\' *ngIf="!item.check" name="ios-checkmark-circle-outline"  (click)=\'agregacarrito(item);item.check=true\'></ion-icon>\n     <ion-icon item-end  style=\'float:right;font-size: 27px;\' *ngIf="item.check" name="ios-checkmark-circle"  (click)=\'quitacarrito(item);item.check=false\'></ion-icon> \n\n  </ion-item>\n\n</ion-list>\n\n -->\n\n<!-- <ion-list>\n  <ion-item ion-item *ngFor="let item of subcategoria">\n\n    <ion-icon name="ios-remove-circle-outline" style=\'padding-right: 4px;\' [hidden]="!item.muestradescripcion" (click)=\'item.muestradescripcion=false\'></ion-icon>\n\n     <ion-icon name="ios-add-circle-outline" style=\'padding-right: 4px;\' [hidden]="item.muestradescripcion" (click)=\'item.muestradescripcion=true\'></ion-icon>\n\n      {{descripcion}}\n\n\n       {{item.nombre}} <span style=\'position: absolute;\n    right: 49px;color:#909090;\'>S/. {{item.precio}} </span>\n     <ion-icon style=\'float:right;font-size: 27px;\' *ngIf="!item.check" name="ios-checkmark-circle-outline"  (click)=\'agregacarrito(item);item.check=true\'></ion-icon>\n     <ion-icon  style=\'float:right;font-size: 27px;\' *ngIf="item.check" name="ios-checkmark-circle"  (click)=\'quitacarrito(item);item.check=false\'></ion-icon> \n\n      <p [hidden]="!item.muestradescripcion"  class=\'detallesubcategoria\'> {{item.descripcion}}</p>\n\n\n\n  </ion-item>\n\n\n\n</ion-list> -->\n\n\n\n\n<!-- \n<div  class="fixed55" >\n<button ion-button full round color="dark" *ngIf=\'book>0\' style=\'background: #000;\n    color: #fff;\' [navPush]="ubicacionPage" (click)=\'continuar()\'>\n\n\n\n <div class="row">\n    <div class="col"> {{book}}</div>\n    \n    <div class="col">  Continuar \n</div>\n\n\n    <div class="col" ><span> S/. {{precio}}</span> </div>\n\n\n\n\n</div>\n\n\n\n\n\n     </button>\n\n</div>\n    \n\n -->\n\n\n\n\n\n\n<!-- <button class="fixed44"  ion-button  dark >\n    <ion-icon ios="ios-cart" md="md-cart"></ion-icon>  {{book}} Productos a Reservar S/. {{precio}}\n  </button> -->\n\n\n</ion-content>\n\n  \n\n<style type="text/css">\n  \n  .active{\n-webkit-filter: grayscale(100%);  Safari 6.0 - 9.0 \n filter: grayscale(100%); \n    color:#fff;\n  }\n\n  .desactivo{\n\n    -webkit-filter: grayscale(0%);  Safari 6.0 - 9.0 \n filter: grayscale(0%);\n\n\n  }\n</style>'/*ion-inline-end:"/home/joel/lima/src/pages/venta/venta.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VentaPage);
    return VentaPage;
}());

//# sourceMappingURL=venta.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map