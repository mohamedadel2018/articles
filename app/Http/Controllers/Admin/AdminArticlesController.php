<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\adminArticleRequest;
use App\Models\Article;
use App\Models\Category;
use Image;

class AdminArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Article = Article::latest()->paginate(8);
        $catigory = Category::latest()->get();
        return response()->json(['Article'  => $Article,
        'catigory' => $catigory ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(adminArticleRequest $request)
    {
        $add_article = new Article();
        $add_article->title =  $request->title;
        $add_article->body = $request->body;
        $add_article->category_id = $request->category_id;
        if($request->image){
            $name = time().'.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
            \Image::make($request->image)->resize(660, 200)->save(public_path('images/Article/').$name);
            $request->merge(['image' => $name]);
        }
        $add_article->image = $name;
        $add_article->save();
        return response()->json([], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(adminArticleRequest $request, $id)
    {
        //
        $update_Article = Article::find($id);
        if($request->image &&  $update_Article->image != $request->image)
            {

                $name = time().'.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                \Image::make($request->image)->resize(660, 200)->save(public_path('images/Article/').$name);
                $request->merge(['image' => $name]);
                $request->image = $name;
                //Delete old img
                $image_path = public_path().'/images/Article/'.$update_Article->image;
                unlink($image_path);
            }
            $update_Article->update($request->all());
            return response()->json([], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $delete_Article = Article::find($id);
        $image_path = public_path().'/images/Article/'.$delete_Article->image;
        unlink($image_path);
        $delete_Article->delete();

        return response()->json([], 200);
    }
}
