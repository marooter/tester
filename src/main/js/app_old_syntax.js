var React = require('react');

var ReactDOM = require('react-dom');

var ons = require('onsenui');

var Ons = require('react-onsenui');

var client = require('./client');
var page = true;
var page2 = true;
var index = [0,0];
var num = 0;
var pro = ['สอนกีต้า','สอนกลองชุด','สอนเบส','สอนร้องเพลง'];
var pro2 = [];
var pro3 = [];
var D = [];
var Ge = [];
var price =[];
var URL = ["https://www.uppic.org/thumb-4627_59DB5B2B.jpg",
"https://www.uppic.org/thumb-A076_59DB5E61.jpg","https://www.uppic.org/thumb-9CA3_59DB5F46.jpg",
"https://www.uppic.org/thumb-0AE0_59DB62F0.jpg"];
var URL2 = [];
var URL3 = [];

var MyPage = React.createClass({
  getInitialState: function() {
    return {
      date: '',
      modifier: '',
      username: '',
      nameTecher: '',
      price:'',
      vegetables3: [

        ],

      vegetables2: [

        ],

        
      vegetables: [
       'สอนกีต้า',
       'สอนกลองชุด',
       'สอนเบส',
       'สอนร้องเพลง',
      ],
    };
  },
  
renderToolbar: function(route, navigator) {
    const backButton = route.hasBackButton
      ? <Ons.BackButton onClick={this.handleClick.bind(this, navigator)}>Back</Ons.BackButton>
      : null;

    return (
      <Ons.Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{route.title}</div>
        
      </Ons.Toolbar>
    );
  },
  

  renderPage: function(route, navigator) {
    
    if(page == true && page2 == true){
    return (
      <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
          <section style={{textAlign: 'center'}}>
          <p>
          <Ons.ListHeader>ชื่อ-นามสกุล</Ons.ListHeader>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              placeholder='ex : ทองยศ ศรีเพ็ง' />
          </p>
          <p>
           <Ons.ListHeader>วัน/เดือน/ปี</Ons.ListHeader>
            <Ons.Input
              value={this.state.date}
              onChange={this.handleDateChange}
              modifier='date'
              float
              placeholder='ex: 01/01/2560' />
          </p>
          
         
          </section>
           <Ons.List
             dataSource={this.state.vegetables}
             renderHeader={() => <Ons.ListHeader>คอร์สเรียนดนตรี</Ons.ListHeader>}
             renderRow={this.renderCheckboxRow}
            />
        
           <section style={{margin: '16px', textAlign: 'center'}}>
             <Ons.Button onClick={this.pushPage.bind(this, navigator)}>เลือก</Ons.Button>
           </section>
           
        </Ons.Page>
      ); 
    }else if(page != page2){
      var a = this.state.selectedVegetable
      if(a=='สอนกีต้า'){
        return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
           
           <section style={{textAlign: 'center'}}>
            <Ons.ListHeader>เลือกเวลา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.modifier} modifier={this.state.modifier} onChange={this.editSelects}>
              <option value="10:00-12:00">10:00-12:00</option>
              <option value="12:00-14:00">12:00-14:00</option>
              <option value="14:00-16:00">14:00-16:00</option>
              <option value="16:00-18:00">16:00-18:00</option>
              <option value="18:00-20:00">18:00-20:00</option>
              <option value="20:00-22:00">20:00-22:00</option>
            </Ons.Select>
            
            <Ons.ListHeader>เลือกครูผู้สอน</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.nameTecher} nameTecher={this.state.nameTecher} onChange={this.editSelects1}>
              <option value="ก้อง ห้วยไร่">ก้อง ห้วยไร่</option>
              <option value="กระแต อาร์สยาม">กระแต อาร์สยาม</option>
              <option value="ไผ่ พงศธร">ไผ่ พงศธร</option>
              <option value="จินตรหรา พูนลาภ">จินตหรา พูนลาภ</option>
              <option value="มานต์แคน แก่นคูณ">มนต์แคน แก่นคูน</option>
            </Ons.Select>
             <Ons.ListHeader>ราคา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.price} price={this.state.price} onChange={this.editSelects2}>
              <option value="5,000่">5,000</option>
              <option value="4,500">4,500</option>
              <option value="4,000">4,000</option>
              <option value="3,500">3,500</option>
              <option value="3,000">3,000</option>n>
            </Ons.Select>
            </section>
           
            <Ons.List
              dataSource={this.state.vegetables2}
              renderHeader={() => <Ons.ListHeader></Ons.ListHeader>}
              renderRow={this.renderRadioRow}
            
            />
              <p style={{textAlign: 'center'}}>
               <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ยืนยันการจอง</Ons.Button>
              </p>
          </Ons.Page>
          
        );
      }else if(a=='สอนกลองชุด'){
        return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
           
           <section style={{textAlign: 'center'}}>
            <Ons.ListHeader>เลือกเวลา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.modifier} modifier={this.state.modifier} onChange={this.editSelects}>
              <option value="10:00-12:00">10:00-12:00</option>
              <option value="12:00-14:00">12:00-14:00</option>
              <option value="14:00-16:00">14:00-16:00</option>
              <option value="16:00-18:00">16:00-18:00</option>
              <option value="18:00-20:00">18:00-20:00</option>
              <option value="20:00-22:00">20:00-22:00</option>
            </Ons.Select>
            
            <Ons.ListHeader>เลือกครูผู้สอน</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.nameTecher} nameTecher={this.state.nameTecher} onChange={this.editSelects1}>
              <option value="ก้อง ห้วยไร่">ก้อง ห้วยไร่</option>
              <option value="กระแต อาร์สยาม">กระแต อาร์สยาม</option>
              <option value="ไผ่ พงศธร">ไผ่ พงศธร</option>
              <option value="จินตรหรา พูนลาภ">จินตหรา พูนลาภ</option>
              <option value="มานต์แคน แก่นคูณ">มนต์แคน แก่นคูน</option>
            </Ons.Select>
             <Ons.ListHeader>ราคา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.price} price={this.state.price} onChange={this.editSelects2}>
              <option value="5,000่">5,000</option>
              <option value="4,500">4,500</option>
              <option value="4,000">4,000</option>
              <option value="3,500">3,500</option>
              <option value="3,000">3,000</option>n>
            </Ons.Select>
            </section>
           
            <Ons.List
              dataSource={this.state.vegetables2}
              renderHeader={() => <Ons.ListHeader></Ons.ListHeader>}
              renderRow={this.renderRadioRow}
            
            />
              <p style={{textAlign: 'center'}}>
               <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ยืนยันการจอง</Ons.Button>
              </p>
          </Ons.Page>
          
        );
      }else if(a=='สอนเบส'){
       return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
           
           <section style={{textAlign: 'center'}}>
            <Ons.ListHeader>เลือกเวลา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.modifier} modifier={this.state.modifier} onChange={this.editSelects}>
              <option value="10:00-12:00">10:00-12:00</option>
              <option value="12:00-14:00">12:00-14:00</option>
              <option value="14:00-16:00">14:00-16:00</option>
              <option value="16:00-18:00">16:00-18:00</option>
              <option value="18:00-20:00">18:00-20:00</option>
              <option value="20:00-22:00">20:00-22:00</option>
            </Ons.Select>
            
            <Ons.ListHeader>เลือกครูผู้สอน</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.nameTecher} nameTecher={this.state.nameTecher} onChange={this.editSelects1}>
              <option value="ก้อง ห้วยไร่">ก้อง ห้วยไร่</option>
              <option value="กระแต อาร์สยาม">กระแต อาร์สยาม</option>
              <option value="ไผ่ พงศธร">ไผ่ พงศธร</option>
              <option value="จินตรหรา พูนลาภ">จินตหรา พูนลาภ</option>
              <option value="มานต์แคน แก่นคูณ">มนต์แคน แก่นคูน</option>
            </Ons.Select>
             <Ons.ListHeader>ราคา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.price} price={this.state.price} onChange={this.editSelects2}>
              <option value="5,000่">5,000</option>
              <option value="4,500">4,500</option>
              <option value="4,000">4,000</option>
              <option value="3,500">3,500</option>
              <option value="3,000">3,000</option>n>
            </Ons.Select>
            </section>
           
            <Ons.List
              dataSource={this.state.vegetables2}
              renderHeader={() => <Ons.ListHeader></Ons.ListHeader>}
              renderRow={this.renderRadioRow}
            
            />
              <p style={{textAlign: 'center'}}>
               <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ยืนยันการจอง</Ons.Button>
              </p>
          </Ons.Page>
          
        );
      }else if(a=='สอนร้องเพลง'){
       return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
           
           <section style={{textAlign: 'center'}}>
            <Ons.ListHeader>เลือกเวลา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.modifier} modifier={this.state.modifier} onChange={this.editSelects}>
              <option value="10:00-12:00">10:00-12:00</option>
              <option value="12:00-14:00">12:00-14:00</option>
              <option value="14:00-16:00">14:00-16:00</option>
              <option value="16:00-18:00">16:00-18:00</option>
              <option value="18:00-20:00">18:00-20:00</option>
              <option value="20:00-22:00">20:00-22:00</option>
            </Ons.Select>
            
            <Ons.ListHeader>เลือกครูผู้สอน</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.nameTecher} nameTecher={this.state.nameTecher} onChange={this.editSelects1}>
              <option value="ก้อง ห้วยไร่">ก้อง ห้วยไร่</option>
              <option value="กระแต อาร์สยาม">กระแต อาร์สยาม</option>
              <option value="ไผ่ พงศธร">ไผ่ พงศธร</option>
              <option value="จินตรหรา พูนลาภ">จินตหรา พูนลาภ</option>
              <option value="มานต์แคน แก่นคูณ">มนต์แคน แก่นคูน</option>
            </Ons.Select>
             <Ons.ListHeader>ราคา</Ons.ListHeader>
            <Ons.Select id="choose-sel" value={this.state.price} price={this.state.price} onChange={this.editSelects2}>
              <option value="5,000่">5,000</option>
              <option value="4,500">4,500</option>
              <option value="4,000">4,000</option>
              <option value="3,500">3,500</option>
              <option value="3,000">3,000</option>n>
            </Ons.Select>
            </section>
           
            <Ons.List
              dataSource={this.state.vegetables2}
              renderHeader={() => <Ons.ListHeader></Ons.ListHeader>}
              renderRow={this.renderRadioRow}
            
            />
              <p style={{textAlign: 'center'}}>
               <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ยืนยันการจอง</Ons.Button>
              </p>
          </Ons.Page>
          
        );
      }    
   }else 
    var a = this.state.selectedVegetable
    var d = this.state.date
    var e = this.state.modifier
    var g = this.state.nameTecher
    var i = this.state.username
    var j = this.state.price
        return (
      <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
        <section style={{textAlign: 'center'}}>
        
          <p>
          
           <Ons.ListHeader>เลขที่ใบบันทึกการจอง : {num}</Ons.ListHeader>
          
           <Ons.ListHeader>ชื่อ :{i}</Ons.ListHeader>
          
           <Ons.ListHeader>วัน/เดือน/ปี : {d} </Ons.ListHeader>
        
           <Ons.ListHeader>คอร์สเรียน : {a}</Ons.ListHeader>
           
           <Ons.ListHeader>ครูผู้สอน : {g} </Ons.ListHeader>
           
           <Ons.ListHeader>เวลาเรียน : {e}</Ons.ListHeader>
           
           <Ons.ListHeader>ราคา :{j} </Ons.ListHeader>
           
          </p>
          </section>
        
        <p style={{textAlign: 'center'}}>
          <Ons.Button onClick={this.handleClick.bind(this, navigator)}>ยืนยัน</Ons.Button>
        </p>
      </Ons.Page>
        );
  },
  
  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
        </label>
        
        <label htmlFor={`checkbox-${pro[c]}`} className = 'center'>
          <img src={URL[c]} style={{width: '80',height: '75'}} />&emsp;{pro[c]}
        </label>
 
        <label htmlFor={`checkbox-${row}`} className='right'>
          
        </label>
   
    </Ons.ListItem>

    );
  },
  renderRadioRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable2}
            onChange={this.handleVegetableChange2.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${pro2[c]}`} className = 'center'>
          <img src={URL2[c]} style={{width: '80',height: '75'}} />&emsp;{pro2[c]}
          <ons-list className='left'>
           </ons-list>
        </label>
        <label htmlFor={`checkbox-${row}`} className='right'>
        </label>
   
    </Ons.ListItem>

    );
  },
   renderRadioRow2(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable3}
            onChange={this.handleVegetableChange3.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${pro3[c]}`} className = 'center'>
          <img src={URL3[c]} style={{width: '80',height: '75'}} />&emsp;{pro3[c]}
          <ons-list className='left'>
           </ons-list>
        </label>
        <label htmlFor={`checkbox-${row}`} className='right'>
        </label>
   
    </Ons.ListItem>

    );
  },
  
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  },

  handleVegetableChange(vegetable) {
    this.setState({selectedVegetable: vegetable});
  },
  
  handleVegetableChange2(vegetable2) {
    this.setState({selectedVegetable2: vegetable2});
  },
  
  handleVegetableChange3(vegetable3) {
    this.setState({selectedVegetable3: vegetable3});
  },
  handleDateChange(e) {
    this.setState({date: e.target.value});
  },
   handleDateChange(j) {
    this.setState({date: j.target.value});
  },
   handleDateChange(g) {
    this.setState({date: g.target.value});
  },
  editSelects(event) {
    this.setState({modifier: event.target.value});
  },
  editSelects1(event) {
    this.setState({nameTecher: event.target.value});
  },
    editSelects2(event) {
    this.setState({price: event.target.value});
  },
  
  pushPage: function(navigator) {
    var a = this.state.selectedVegetable
    var b = this.state.selectedVegetable2
    var c = this.state.selectedVegetable3

   
    if(a == 'สอนกีต้า'){
      if(page==true && page2 == true){
        navigator.pushPage({
        title: `สอนกีต้า`,
        hasBackButton: true
        }); 
        page = false;
      }else if(page!=page2 ){
        navigator.pushPage({
        title: `ใบบันทึกการจองคอร์สเรียน`,
        hasBackButton: false
        });
        page2 = false;num++;
      }else{
        ons.notification.alert('กรุณาเลือกคอร์สเรียนก่อน');
      }
    }else if(a == 'สอนกลองชุด'){
      if(page==true && page2 == true){
        navigator.pushPage({
        title: `สอนกลองชุด`,
        hasBackButton: true
        }); 
        page = false;
      }else if(page!=page2 ){
        navigator.pushPage({
        title: `ใบบันทึกการจองคอร์สเรียน`,
        hasBackButton: false
        });
        page2 = false;num++;
      }else{
         ons.notification.alert('กรุณาเลือกคอร์สเรียนก่อน');
      }
    }else if(a == 'สอนเบส'){
      if(page==true && page2 == true){
        navigator.pushPage({
        title: `สอนเบส`,
        hasBackButton: true
        }); 
        page = false;
      }else if(page!=page2){
        navigator.pushPage({
        title: `ใบบันทึกการจองคอร์สเรียน`,
        hasBackButton: false
        });
        page2 = false;num++;
      }else{
        ons.notification.alert('กรุณาเลือกคอร์สเรียนก่อน');
      }
    }else if(a == 'สอนร้องเพลง'){
      if(page==true && page2 == true){
        navigator.pushPage({
       title: `ใบบันทึกการจองคอร์สเรียน`,
        hasBackButton: true
        }); 
        page = false;
      }else if(page!=page2){
        navigator.pushPage({
      title: `ใบบันทึกการจองคอร์สเรียน`,
        hasBackButton: false
        });
        page2 = false;num++;
      }else{
        ons.notification.alert('กรุณาเลือกคอร์สเรียนก่อน');
      }
    }
    else{
      ons.notification.alert('กรุณาเลือกคอร์สเรียน');
    }
  },
  
  
  handleClick: function(navigator) {
  
    page = true,page2=true,index[0] = 0,index[1] = 0;
    ons.notification.confirm('Do you really want to go back?')
      .then((response) => {
        if (page==true && page2 == true) {
          navigator.popPage();
        }
      });
    var i = this.state.selectedVegetable
    var d = this.state.date
    var j = this.state.modifier
    var e = this.state.nameTecher
    var a = this.state.username
    var g = this.state.price
      client({method: 'GET', path: '/couse/'+a+'/date/'+d+'/time/'+e+'/techer/'+g+'/user/'+i+'/price/'+j}).done(
               ons.notification.alert('บันทึกสำเร็จ')
         )
  },
  
  
  render: function() {
    return (
        <Ons.Navigator
        swipeable
        renderPage={this.renderPage}
        initialRoute={{
          title: 'คอร์สเรียนดนตรี',
          hasBackButton: false
        }}
        />
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('react'));
});