<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Post
 * 
 * @property string $post_id
 * @property string $post_name
 * @property string|null $post_description
 * @property Carbon|null $post_creation_date
 * @property string|null $post_url
 * @property string|null $post_img
 * @property string|null $owner_user_name
 * 
 * @property Student|null $student
 *
 * @package App\Models
 */
class Post extends Model
{
	protected $table = 'posts';
	protected $primaryKey = 'post_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $dates = [
		'post_creation_date'
	];

	protected $fillable = [
		'post_name',
		'post_description',
		'post_creation_date',
		'post_url',
		'post_img',
		'owner_user_name'
	];

	public function student()
	{
		return $this->belongsTo(Student::class, 'owner_user_name');
	}
}
