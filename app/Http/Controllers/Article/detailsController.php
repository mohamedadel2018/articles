<?php

namespace App\Http\Controllers\Article;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class detailsController extends Controller
{
    public function ReturnDetailsArticle(Article $Article){
        $mightAlsoLikes =  Article::where('id' ,'!=' ,$Article)->MightAlsoLike()->get();
        return view('Articles.detail',compact('Article', 'mightAlsoLikes'));

    }
}
