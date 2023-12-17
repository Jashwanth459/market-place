<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class StudentCart
 * 
 * @property string $student_user_name
 * @property string $p_id
 * @property int|null $quantity
 * 
 * @property Student $student
 * @property Product $product
 *
 * @package App\Models
 */
class StudentCart extends Model
{
	protected $table = 'student_cart';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'quantity' => 'int'
	];

	protected $fillable = [
		'quantity'
	];

	public function student()
	{
		return $this->belongsTo(Student::class, 'student_user_name');
	}

	public function product()
	{
		return $this->belongsTo(Product::class, 'p_id');
	}
}
