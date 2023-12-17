<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Student
 * 
 * @property string $student_id
 * @property string $User_name
 * @property string $FName
 * @property string|null $LName
 * @property string|null $Major
 * @property string|null $Mobile
 * @property string|null $Mail_id
 * @property string|null $Address
 * @property string|null $sua_user_name
 * @property string|null $s_user_name
 * 
 * @property Customer $customer
 * @property SuperAdmin|null $super_admin
 * @property SchoolAdmin|null $school_admin
 * @property Collection|Club[] $clubs
 * @property Collection|CustomerQuery[] $customer_queries
 * @property Collection|Post[] $posts
 * @property Collection|StudentCart[] $student_carts
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Student extends Model
{
	protected $table = 'student';
	protected $primaryKey = 'User_name';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'student_id',
		'FName',
		'LName',
		'Major',
		'Mobile',
		'Mail_id',
		'Address',
		'sua_user_name',
		's_user_name'
	];

	public function customer()
	{
		return $this->belongsTo(Customer::class, 'User_name');
	}

	public function super_admin()
	{
		return $this->belongsTo(SuperAdmin::class, 'sua_user_name');
	}

	public function school_admin()
	{
		return $this->belongsTo(SchoolAdmin::class, 's_user_name');
	}

	public function clubs()
	{
		return $this->belongsToMany(Club::class, 'club_students', 'st_user_name')
					->withPivot('st_joined_date');
	}

	public function customer_queries()
	{
		return $this->hasMany(CustomerQuery::class, 'query_user_name');
	}

	public function posts()
	{
		return $this->hasMany(Post::class, 'owner_user_name');
	}

	public function student_carts()
	{
		return $this->hasMany(StudentCart::class, 'student_user_name');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'student_order_products', 'student_user_name')
					->withPivot('order_id', 'p_quantity');
	}
}
