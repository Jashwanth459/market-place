<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class StudentOrder
 * 
 * @property string $order_id
 * @property Carbon|null $ordered_date
 * @property int|null $total_price
 * @property string|null $status
 * @property Carbon|null $return_date
 * 
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class StudentOrder extends Model
{
	protected $table = 'student_orders';
	protected $primaryKey = 'order_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'total_price' => 'int'
	];

	protected $dates = [
		'ordered_date',
		'return_date'
	];

	protected $fillable = [
		'ordered_date',
		'total_price',
		'status',
		'return_date'
	];

	public function products()
	{
		return $this->belongsToMany(Product::class, 'student_order_products', 'order_id')
					->withPivot('student_user_name', 'p_quantity');
	}
}
