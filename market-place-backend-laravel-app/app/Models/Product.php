<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Product
 * 
 * @property string $p_id
 * @property string $p_name
 * @property string|null $p_description
 * @property int|null $quantity
 * @property float|null $price_per_unit
 * @property Carbon|null $p_creation_date
 * @property string|null $p_url
 * @property string|null $p_img
 * @property string|null $owner_user_name
 * @property string|null $rating
 * @property string|null $category
 * 
 * @property BusinessOwner|null $business_owner
 * @property Collection|StudentCart[] $student_carts
 * @property Collection|Student[] $students
 * @property Collection|StudentOrder[] $student_orders
 *
 * @package App\Models
 */
class Product extends Model
{
	protected $table = 'products';
	protected $primaryKey = 'p_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'quantity' => 'int',
		'price_per_unit' => 'float'
	];

	protected $dates = [
		'p_creation_date'
	];

	protected $fillable = [
		'p_id',
		'p_name',
		'p_description',
		'quantity',
		'price_per_unit',
		'p_creation_date',
		'p_url',
		'p_img',
		'owner_user_name',
		'rating',
		'category'
	];

	public function business_owner()
	{
		return $this->belongsTo(BusinessOwner::class, 'owner_user_name');
	}

	public function student_carts()
	{
		return $this->hasMany(StudentCart::class, 'p_id');
	}

	public function students()
	{
		return $this->belongsToMany(Student::class, 'student_order_products', 'product_id', 'student_user_name')
					->withPivot('order_id', 'p_quantity');
	}

	public function student_orders()
	{
		return $this->belongsToMany(StudentOrder::class, 'student_order_products', 'product_id', 'order_id')
					->withPivot('student_user_name', 'p_quantity');
	}
}
