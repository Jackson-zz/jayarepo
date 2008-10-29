var data = {};

data.cs = Course.find().limit( 100 ).sort( { name : 1 } );
template = local.views.courses;

if ( request.c__id ){
    data.c = Course.findOne( request.c__id );
}

if ( request.action == "list" ){
    // already setup
}
else if ( data.c && request.action == "Delete" ){
    data.c.remove();
    data.c = null;
}
else if ( data.c && request.action == "Edit" ){
}
else if ( request.action == "Save" ){
    data.c = data.c || new Course();
    Forms.fillInObject( "c_" , data.c , request );
    data.c.save();
    data.c = null;
}
else if ( request.action == "New" ){
    data.c = new Course();
    
}

if ( data.c ){
    data.c._form = new Forms.Form( data.c , "c_" );
    template = local.views.course;
    
}

template( data );

