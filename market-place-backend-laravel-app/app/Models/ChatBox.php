<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ChatBox
 * 
 * @property string $chat_id
 * @property string|null $chat_content
 * @property string|null $sender
 * @property string|null $receiver
 * @property Carbon|null $time_stamp
 * 
 * @property Customer|null $customer
 *
 * @package App\Models
 */
class ChatBox extends Model
{
	protected $table = 'chat_box';
	protected $primaryKey = 'chat_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $dates = [
		'time_stamp'
	];

	protected $fillable = [
		'chat_content',
		'sender',
		'receiver',
		'time_stamp'
	];

	public function customer()
	{
		return $this->belongsTo(Customer::class, 'receiver');
	}
}
