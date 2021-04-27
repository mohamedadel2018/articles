<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminArticlesController;
use App\Http\Controllers\Admin\admincatigoryController;
use App\Http\Controllers\Article\ArticleController;
use App\Http\Controllers\Article\catigoryController;
use App\Http\Controllers\Article\detailsController;
use App\Http\Controllers\Article\CommentController;

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
    return view('articles.home');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::apiResources(['Article' => ArticleController::class]);
Route::get('PopularArticle', [ArticleController::class,'PopularArticle']);
Route::post('ArticleBycatigory/{id}' , [ ArticleController::class,'ArticleBycatigory']);
Route::apiResources(['category' => catigoryController::class]);
Route::get('details/{Article}', [detailsController::class,'ReturnDetailsArticle']);
Route::apiResources(['comment' => CommentController::class]);
Route::post('getcomments/{id}', [CommentController::class,'getcomments']);

//admin Login Page
Route::get('/admin', function(){
    return view('admin.login');
});
Route::get('/admin-logout', [AdminController::class , 'logout'])->name('admin-logout');

Route::post('/checkLogin', [AdminController::class , 'checkadminlogin'])->name('checkadminlogin');



Route::group(['prefix' => 'admin' , 'middleware' => 'auth:admin'],function () {

    Route::get('dashboard',[ AdminController::class ,'AdminDashboard'])->name('dashboard');

    Route::get('articles',function(){
     return view('admin.components.Articles');
    })->name('articles');

    Route::get('catigory',function(){
        return view('admin.components.catigory');
    })->name('catigory');

    Route::apiResources(['adminCatigory' => admincatigoryController::class]);
    Route::apiResources(['adminArticle' => AdminArticlesController::class]);
});
