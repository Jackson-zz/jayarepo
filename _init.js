
core.content.forms();
core.db.modelBase();

local.models.utils();
local.models.course();
local.models.student();

core.core.routes();

routes = new Routes();
routes.student = "/student.jxp";
routes.add( "students" , "/student.jxp" , { extra : { action : "list" } } );
