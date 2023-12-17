<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CustomerQuery
 * 
 * @property string $query_id
 * @property string $query_user_name
 * @property string|null $FName
 * @property string|null $LName
 * @property string|null $mail_id
 * @property string|null $ph_no
 * @property string|null $query_message
 * 
 * @property Student $student
 *
 * @package App\Models
 */
class CustomerQuery extends Model
{
	protected $table = 'customer_queries';
	protected $primaryKey = 'query_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'query_user_name',
		'FName',
		'LName',
		'mail_id',
		'ph_no',
		'query_message'
	];

	public function student()
	{
		return $this->belongsTo(Student::class, 'query_user_name');
	}
}
