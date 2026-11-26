window.A4 = window.A4 || {};
A4.p1 = `
<!-- ===== 01 基线、环境与本文定位 ===== -->
<section class="chapter" id="baseline">
  <div class="ch-head"><div class="ch-num">01</div>
    <h2>基线、环境与本文定位<span class="en">BASELINE, OPERATING ENVIRON &amp; SCOPE</span></h2>
  </div>
  <p class="lede">作业 4 不再重新定义系统要做什么，而是在前序需求、架构与安全分析的基线上，回答“系统在什么环境、什么条件下运行”：把环境展开为可分层的场景，把场景拆解为可核对的要素，再用运行设计条件框定正常运行的包络，并落到一个典型场景与一组风险场景上。</p>

  <h3><span class="h3-n">1.1</span>向上承接的基线</h3>
  <p>小组 SoI 沿用作业 2、作业 3 确定的<strong>校园自动驾驶微循环接驳系统</strong>（Campus Autonomous Micro-transit，CAMT）：低速、限定区域、按需调度的运输服务系统，以 6 台† L4 级低速接驳车为运力单元，串联 18 个站点†，由云端调度平台统一派单，依赖校园专网、路侧感知与专用充电位维持连续运行。前序产物及其在本文中的承接关系如下表。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 1-1　前序基线在作业 4 中的承接关系</caption>
      <colgroup><col style="width:20%"><col style="width:36%"><col style="width:44%"></colgroup>
      <thead><tr><th>前序产物</th><th>内容摘要</th><th>本文承接位置</th></tr></thead>
      <tbody>
        <tr><td class="id">BRS（BR-01～08）</td><td>覆盖、高峰运力、恶劣天气连续性、秩序消防、数据资产、成本、合规、隐私</td><td>运行设计范围与服务连续性约束的上层来源；第 04、07 章追溯</td></tr>
        <tr><td class="id">StRS（UR-01～18）</td><td>可用性覆盖、体验无障碍、安全应急、秩序环境数据、运维保障五组</td><td>场景要素中人员与乘客状态、体验条件的需求来源</td></tr>
        <tr><td class="id">SyRS（FR/PR/IR/…）</td><td>功能、性能、接口、安保、信息、法规、保障需求与七状态、四模式定义</td><td>ODC 系统状态条件与场景行为判据的直接依据</td></tr>
        <tr><td class="id">STPA 分析（H/UCA/C/SR）</td><td>8 类危险、14 项不安全控制动作、10 条致险场景、10 条安全需求</td><td>第 06 章风险场景列表的危险与缓释基线，双向追溯</td></tr>
        <tr><td class="id">运行场景 SC-1～6</td><td>高峰潮汐、暴雨降级、夜间预约、低电量返场、通信中断、施工封路</td><td>场景分层主轴的归类对象；第 02、05 章展开</td></tr>
      </tbody>
    </table>
  </div>

  <h3><span class="h3-n">1.2</span>系统所处的运行环境</h3>
  <p>按作业 2 的边界判据，控制权与责任归属在 SoI 之内的是车辆本体、车载感知与决策、站点交互终端、云端调度平台与专用充电位；运行环境中的外部实体只通过接口与 SoI 交互。本文把运行环境归纳为四个相互作用的环境面，后续场景要素与运行设计条件均从这四个环境面派生。</p>
  <div class="duo">
    <div>
      <h5>PHYSICAL<b>物理与交通环境</b></h5>
      <dl>
        <dt>道路空间</dt><dd>校园铺装道路、人车混行段、站点集散区、跨校区连接段；坡度不大于 8%†，消防通道与人行专用道为禁行区域。</dd>
        <dt>交通参与者</dt><dd>步行师生、骑行者、两轮车、既有校车与人工小巴、临时行人与访客；行为具有随机性与聚集性。</dd>
        <dt>自然条件</dt><dd>降雨、积雪、扬尘、夜间低照明、寒暑温湿度变化；路面附着与能见度随天气波动。</dd>
      </dl>
    </div>
    <div>
      <h5>SUPPORT<b>信息、能源与组织环境</b></h5>
      <dl>
        <dt>信息基础设施</dt><dd>校园专网、定位与先验地图、路侧感知单元、统一身份认证与校方数据中台；存在局部覆盖不足† 的可能。</dd>
        <dt>能源保障</dt><dd>校园配电网、专用充电桩与计量设施；单站同时充电不超过 2 台†，绝缘与消防联动为强制条件。</dd>
        <dt>组织与监管</dt><dd>项目办、运营调度、远程安全监控、驻场运维、保卫处、信息化部门、属地交管与消防；按规则 R1～R6 协同。</dd>
      </dl>
    </div>
  </div>

  <h3><span class="h3-n">1.3</span>本文要回答的问题</h3>
  <div class="box">
    <div class="box-t">作业 4 的五项交付 / DELIVERABLES</div>
    <ul>
      <li><strong>场景分层</strong>：按系统所处处境把全部运行场景划分为可管理的层级（第 02 章）。</li>
      <li><strong>场景要素</strong>：逐类梳理每个分层下包含的具体场景要素及其取值约束（第 03 章）。</li>
      <li><strong>运行设计条件（ODC）</strong>：设定系统正常运行的条件包络，含运行设计范围、系统状态、人员状态三部分（第 04 章）。</li>
      <li><strong>典型场景详述</strong>：选取一个代表性场景实例，按要素、时序与 ODC 符合性展开论述（第 05 章）。</li>
      <li><strong>风险场景列表</strong>：针对典型运行场景开展安全风险分析，导出分级、可追溯的风险场景清单（第 06 章）。</li>
    </ul>
  </div>
  <p class="note">约定：带 † 的数值为小组讨论设定的假设值，用于支撑论证与验证准则设计，基线评审时须以实测或校方公布数据替换；需求动词“应”表达强制项，“宜”表达目标性愿望项；编号沿用前序基线，新增风险场景编号为 RS-xx。</p>
</section>

<!-- ===== 02 场景分层体系 ===== -->
<section class="chapter" id="taxonomy">
  <div class="ch-head"><div class="ch-num">02</div>
    <h2>场景分层体系<span class="en">SCENARIO TAXONOMY &amp; LAYERING</span><span class="keyflag">场景分层</span></h2>
  </div>
  <p class="lede">场景分层的目的，是把“系统可能遇到的一切情况”组织成结构清晰、互不重叠、可逐类核查的集合。本文采用“主轴分层 + 维度分解”的两层结构：主轴按系统处境把场景分为正常、退化、异常与应急三层；每一层再按环境要素维度展开，形成后续要素梳理与风险分析的坐标。</p>

  <h3><span class="h3-n">2.1</span>主轴：按系统处境的三层划分</h3>
  <p>第一层判据是系统能力与环境条件的匹配程度：系统是否仍在运行设计条件内、是否依赖降级策略、是否进入安全兜底。三层与作业 2 的六个既有场景一一归类，保证场景集合连续、不重不漏。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 2-1　场景主轴分层（按系统处境）</caption>
      <colgroup><col style="width:13%"><col style="width:24%"><col style="width:33%"><col style="width:30%"></colgroup>
      <thead><tr><th>层级</th><th>名称</th><th>定义与典型特征</th><th>对应既有场景</th></tr></thead>
      <tbody>
        <tr><td class="id">L-A</td><td>正常运行场景<br>Nominal</td><td>环境条件在 ODC 包络内，车辆全功能自动驾驶；乘客按预期行为，调度、站点、能源与信息设施正常；系统按常态班次或预约按需模式完成运送。</td><td>SC-1 早高峰潮汐；SC-3 夜间预约低峰</td></tr>
        <tr><td class="id">L-B</td><td>退化运行场景<br>Degraded</td><td>环境或系统出现轻度退化（感知置信度下降、局部通信拥塞、客流短时激增等），系统按既定降级策略降速、增大间距、减少复杂动作，仍维持基本服务，无需人工兜底。</td><td>SC-2 暴雨感知受限</td></tr>
        <tr><td class="id">L-C</td><td>异常与应急场景<br>Off-nominal / Emergency</td><td>自动驾驶能力丧失、失联、能量不足或道路受阻，超出继续自主运行的条件；系统进入最小风险策略（MRC）、远程接管或停运清障，由人工运力接续。</td><td>SC-4 低电量返场；SC-5 通信中断；SC-6 施工封路</td></tr>
      </tbody>
    </table>
  </div>
  <p>三层之间不是并列的静态分类，而是一条有序降级链：L-A 为基线工况，L-B 是 L-A 受扰动后的受限运行，L-C 是无法恢复安全自主后的兜底状态。该降级链与作业 3 安全架构中的“正常自动驾驶 → 受限降级 → MRC → 远程/人工接管 → 停运清障”逐级对应，禁止出现“故障但仍继续自动驾驶”的中间态。</p>

  <h3><span class="h3-n">2.2</span>维度：场景要素的六个分解面</h3>
  <p>在主轴分层之下，每个具体场景都由六个可观测的要素面刻画。维度分解既用于第 03 章逐类梳理要素，也用于第 05 章对典型场景做要素填充、第 06 章定位风险成因。</p>
  <div class="flow">
    <div><span class="fn">D-1</span><b>地理与道路</b>区域、站点、车道路面、坡度、路权与停靠条件</div>
    <div><span class="fn">D-2</span><b>交通参与者</b>乘客、行人、骑行者、其他车辆与两轮车及其行为</div>
    <div><span class="fn">D-3</span><b>环境条件</b>天气、光照、温湿度、路面附着与能见度</div>
    <div><span class="fn">D-4</span><b>信息与设施</b>专网、定位地图、路侧感知、充电电网与数据中台</div>
    <div><span class="fn">D-5</span><b>系统状态</b>运行模式、车辆状态、感知/通信/能量健康度与载荷</div>
  </div>
  <div class="flow" style="grid-template-columns:1fr 1fr;max-width:52%">
    <div><span class="fn">D-6</span><b>人员状态</b>乘客状态与行为、安全员在岗资质、运维状态与注意力</div>
  </div>

  <h3><span class="h3-n">2.3</span>分层—维度矩阵</h3>
  <p>下表给出分层体系的总览：行为主轴层级，列为要素维度，交叉格表示该层在该维度上需要重点核查的内容概要；详细取值与约束在第 03 章逐条展开。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 2-2　场景分层 × 要素维度矩阵</caption>
      <colgroup><col style="width:11%"><col style="width:18%"><col style="width:18%"><col style="width:18%"><col style="width:18%"><col style="width:17%"></colgroup>
      <thead><tr><th>层级</th><th>D-1 地理道路</th><th>D-2 参与者</th><th>D-3 环境条件</th><th>D-4 信息设施</th><th>D-5/D-6 系统与人员</th></tr></thead>
      <tbody>
        <tr><td class="id">L-A 正常</td><td>既定线路与站点，路面平整、坡度合规</td><td>乘客有序上下车，弱势参与者可预期让行</td><td>白天或正常照明，无降水积雪，附着良好</td><td>专网、定位、地图、充电与认证均可用</td><td>系统处于运营态；乘客、安全员、运维状态正常</td></tr>
        <tr><td class="id">L-B 退化</td><td>道路未变，但可行驶区域收窄、积水点需绕行</td><td>参与者视线/行为受天气影响，不确定性升高</td><td>降雨/反光/遮挡导致感知置信度下降</td><td>链路短时拥塞，系统按本地保守策略运行</td><td>进入受限降级；人员保持在岗，提示通道加密</td></tr>
        <tr><td class="id">L-C 应急</td><td>障碍封路、停靠点受限，需二次选择安全位置</td><td>参与者需被警示并绕避停驶车辆</td><td>环境条件可正常，但系统能力丧失成为主矛盾</td><td>接管独立链路、消防联动、事件上报被激活</td><td>进入 MRC/接管/停运；安全员与运维按应急流程介入</td></tr>
      </tbody>
    </table>
  </div>
</section>
`;
