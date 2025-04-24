<?php
// require('cors.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");


/**
 * Class Index
 * The index controller
 */
class Task extends Controller
{
    /**
     * Construct this object by extending the basic Controller class
     */
    function __construct()
    {
        parent::__construct();
        // this controller should only be visible/usable by logged in users, so we put login-check here
        // Auth::handleLogin();
    }
    
    public function adddata()
    {
        $arr = isset($_POST['Arrar']) ? json_decode($_POST['Arrar'], true) : null;
    
        $data = $this->loadModel('Task');
        $result = $data->addData($arr);
    
        echo json_encode(['status' => 'success', 'data' => $result]);
    }
    
    
    public function login()
    {
        $arr = isset($_POST['Arrar']) ? $_POST['Arrar'] : '';
        // $email = json_decode($email, true);
        $data = $this->loadModel('Task');
        $user = $data->login($arr);
        if ($user) {
            echo json_encode(['status' => 'success', 'user' => $user]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
        }
    }
    
    

    public function getalldata()
    {
        $data = $this->loadModel('Task');
        $call = $data->getalldata();
        echo json_encode(value: $call);
    }

    public function getUsersGender()
    {
        $gender = $_GET['gender'] ?? '';
        $data = $this->loadModel('Task');
        $users = $data->getUsersGender($gender);
        echo json_encode($users);
    }

    
    public function getUserById()
    {
        $id = $_REQUEST['id'];
        $data = $this->loadModel('Task');
        $call = $data->getUserById($id);
        echo json_encode($call);
    }
    
//     public function getUserByEmail()
// {
//     $email = $_GET['email'] ?? '';
//     $data = $this->loadModel('Task');
//     $user = $data->getUserByEmail($email);
//     echo json_encode($user);
// }

public function updateData()
    {
        // $arr = array();
        $arr = json_decode($_REQUEST['Arrar'], true);
        $data = $this->loadModel('Task');
        $call = $data->updateData($arr[0]);
        echo json_encode($call);
    }

    public function deleteData()
    {
        $id = $_REQUEST['id'];
        $data = $this->loadModel('Task');
        $call = $data->deleteData($id);
        echo json_encode($call);
    }

}