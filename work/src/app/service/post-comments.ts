export class PostComments {
    id: number;
    blog_id: number;
    parent_id: number;
    name: string;
    email?: string;
    comments?: string;
    publish: string;
    posted_date: string;
    ip_address: string;
    subcomments?: [];
}

/* 
$postcomment[$i]['id']          = $row['id'];
$postcomment[$i]['blog_id']     = $row['blog_id'];
$postcomment[$i]['parent_id']   = $row['parent_id'];
$postcomment[$i]['name']        = $row['name'];
$postcomment[$i]['email']       = $row['email'];
$postcomment[$i]['comments']    = $row['comments'];
$postcomment[$i]['publish']     = $row['publish'];
$postcomment[$i]['posted_date'] = $row['posted_date'];
$postcomment[$i]['ip_address']  = $row['ip_address'];            
$post_subcomments               = getBlogComments($bid, $row['id'] );
if ( !empty ( $post_subcomments ) ) {
    $subcomments                = array_merge( $subcomments, $post_subcomments );
    $postcomment[$i]['subcomments'][]   = $subcomments; 
}
*/