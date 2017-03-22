Select * from (Select distinct t.* ,( 3959 * acos( cos( radians(49.839683) )* cos( radians( t.start_point_lat ) )* cos( radians( t.start_point_lng )- radians(24.029717000000005) )+ sin( radians(49.839683) )* sin( radians( t.start_point_lat ) ))) AS radiusStart,
( 3959 * acos( cos( radians(50.4501) )* cos( radians( t.end_point_lat ) )* cos( radians( t.end_point_lng )- radians(30.523400000000038) )+ sin( radians(50.4501) )* sin( radians( t.end_point_lat ) ))) AS radiusEnd,
( 3959 * acos( cos( radians(49.839683) )* cos( radians( SUBSTRING_INDEX( meta_v, ',', 1) ) )* cos( radians(  SUBSTRING_INDEX( meta_v, ',', -1) )- radians(24.029717000000005) )+ sin( radians(49.839683) )* sin( radians( SUBSTRING_INDEX( meta_v, ',', 1) ) ))) AS radiusStep from trip as t join trip_info as i on i.trip_id = t.id  where  quantity>0  and DATE(t.date_start)>=DATE(CURDATE())  having  radiusStart<10  and radiusEnd<10  and radiusStep<10 union all Select * from (Select distinct t.* ,( 3959 * acos( cos( radians(49.839683) )* cos( radians( t.start_point_lat ) )* cos( radians( t.start_point_lng )- radians(24.029717000000005) )+ sin( radians(49.839683) )* sin( radians( t.start_point_lat ) ))) AS radiusStart,
( 3959 * acos( cos( radians(50.4501) )* cos( radians( t.end_point_lat ) )* cos( radians( t.end_point_lng )- radians(30.523400000000038) )+ sin( radians(50.4501) )* sin( radians( t.end_point_lat ) ))) AS radiusEnd,
( 3959 * acos( cos( radians(49.839683) )* cos( radians( SUBSTRING_INDEX( meta_v, ',', 1) ) )* cos( radians(  SUBSTRING_INDEX( meta_v, ',', -1) )- radians(24.029717000000005) )+ sin( radians(49.839683) )* sin( radians( SUBSTRING_INDEX( meta_v, ',', 1) ) ))) AS radiusStep from trip as t join trip_info as i on i.trip_id = t.id  where  quantity>0  and DATE(t.date_start)>=DATE(CURDATE())  having  radiusStart<10  and radiusEnd<10  and radiusStep<10 ) as trips group by id
