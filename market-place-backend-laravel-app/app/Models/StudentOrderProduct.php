<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class StudentOrderProduct
 * 
 * @property string $student_user_name
 * @property string $order_id
 * @property string $product_id
 * @property int|null $p_quantity
 * 
 * @property Student $student
 * @property Product $product
 * @property StudentOrder $student_order
 *
 * @package App\Models
 */
class StudentOrderProduct extends Model
{
	protected $table = 'student_order_products';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'p_quantity' => 'int'
	];

	protected $fillable = [
		'p_quantity'
	];

	public function student()
	{
		return $this->belongsTo(Student::class, 'student_user_name');
	}

	public function product()
	{
		return $this->belongsTo(Product::class);
	}

	public function student_order()
	{
		return $this->belongsTo(StudentOrder::class, 'order_id');
	}
}
