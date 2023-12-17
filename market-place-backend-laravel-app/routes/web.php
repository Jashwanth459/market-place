<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::view('register', 'register');
Route::view('login', 'login');
Route::view('studenthome', 'studenthome');

Route::get('homeProd', 'App\Http\Controllers\MarketController@homeProd');

Route::post('registerUser', 'App\Http\Controllers\MarketController@registerUser');
Route::post('loginUser', 'App\Http\Controllers\MarketController@login');
// Route::post('loadstudenthome', 'App\Http\Controllers\MarketController@loadStudentHome');
Route::get('products', 'App\Http\Controllers\MarketController@Products');
Route::post('posts', 'App\Http\Controllers\MarketController@Posts');
//Business Page
Route::post('getSingleProdBusiness', 'App\Http\Controllers\MarketController@getSingleProdBusiness');
Route::post('deleteProdBusiness', 'App\Http\Controllers\MarketController@deleteProdBusiness');
Route::post('updateProdDetBusiness', 'App\Http\Controllers\MarketController@updateProdDetBusiness');
Route::post('addNewProductBusiness', 'App\Http\Controllers\MarketController@addNewProductBusiness');
Route::post('updateBusinessOwnerDet', 'App\Http\Controllers\MarketController@addNewProductBusiness');
//Business Page

//School Admin
Route::post('getAllclubs', 'App\Http\Controllers\MarketController@getAllclubs');
Route::post('getAllbusinessOwner', 'App\Http\Controllers\MarketController@getAllbusinessOwner');
Route::post('getAllstudents', 'App\Http\Controllers\MarketController@getAllstudents');
Route::post('schAdminupdateBusinessOwnerDet', 'App\Http\Controllers\MarketController@schAdminupdateBusinessOwnerDet');
Route::post('schAdminupdateStudentDet', 'App\Http\Controllers\MarketController@schAdminupdateStudentDet');
//School Admin

//Super Admin
Route::post('getAllschAdmin', 'App\Http\Controllers\MarketController@getAllschAdmin');
Route::post('superAdminUpdateschaDetails', 'App\Http\Controllers\MarketController@superAdminUpdateschaDetails');

Route::post('productsBO', 'App\Http\Controllers\MarketController@productsBO');
//Route::post('productsBO', 'App\Http\Controllers\MarketController@productsBO');
//Route::post('productsBO', 'App\Http\Controllers\MarketController@productsBO');
//Route::post('productsBO', 'App\Http\Controllers\MarketController@productsBO');

//Super Admin

Route::get('promotions', 'App\Http\Controllers\MarketController@Promotions');
Route::post('studentclubs', 'App\Http\Controllers\MarketController@Studentclubs');
Route::post('studentcreatedclubs', 'App\Http\Controllers\MarketController@Studentcreatedclubs');
Route::post('studentleaveclub', 'App\Http\Controllers\MarketController@Studentleaveclub');
Route::post('studentjoinclub', 'App\Http\Controllers\MarketController@Studentjoinclub');
Route::post('studentcreateclub', 'App\Http\Controllers\MarketController@studentcreateclub');
Route::post('studentdeleteclub', 'App\Http\Controllers\MarketController@studentdeleteclub');
Route::post('studentcart', 'App\Http\Controllers\MarketController@studentcart');
Route::post('studentcartupdate', 'App\Http\Controllers\MarketController@studentcartupdate');
Route::post('studentactiveorders', 'App\Http\Controllers\MarketController@studentactiveorders');
Route::post('studentinactiveorders', 'App\Http\Controllers\MarketController@studentinactiveorders');
Route::post('studentaddtocart', 'App\Http\Controllers\MarketController@studentaddtocart');
Route::post('studentdeletefromcart', 'App\Http\Controllers\MarketController@studentdeletefromcart');
