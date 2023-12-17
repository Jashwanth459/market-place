@extends('layout')
@section('content')
<html>

<body>
    <div class="container">
        <div class="row">
            @foreach($posts as $post)
            <div class="col-sm-4">
                <img class="img-responsive" style="width:100%" src={{$post->post_img}} />
                <h4>{{$post->post_name}}</h4>
                <button name="delete">Delete Club</button>
            </div>
            @endforeach
        </div>
    </div>
</body>

</html>
@endsection