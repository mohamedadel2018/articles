@extends('layouts.app')

@section('content')


    <div class="row justify-content-center">
        <div class="col-md-9">
        <div class="row">
        <div class="leftcolumn">

            <div class="card">
            <a title="{{$Article->title}}">
                <h2>{{$Article->title}}</h2>
                <h5>Date : {{ $Article->created_at->format('d M Y')}}</h5>

            <img style="height:200px;" width="100%" src="/images/Article/{{$Article->image}}" alt="Article.title">
                <p class="mt-4">{{$Article->body}}</p>
            </a>
            </div>
        </div>
            <div class="rightcolumn">
                <div class="card">
                    <h3>Might Also Like </h3>
                    @foreach ($mightAlsoLikes as $mightAlsoLike)
                    <a href="/details/{{$mightAlsoLike->id}}" title="{{$mightAlsoLike->title}}">
                    <h5>{{$mightAlsoLike->title}}</h5>
                    <div class="Also-img"><img width="90%" src="/images/Article/{{$mightAlsoLike->image}}" ></div><br>
                    </a>
                    @endforeach
                </div>
            </div>
        </div>
        </div>
    </div>
    @if (Auth::check())
    <flash-Com></flash-Com>
    <detail-and-comments articleid="{{$Article->id}}"></detail-and-comments>
    @else
    <div class="container card my-4">
    <h5 class="card-header"> Leave a Comment</h5>
    <div class="card-body">
        <h5 class="card-header">You most be Login for comment in this Article </h5>
    </div>
    </div>
    @endif


@endsection
